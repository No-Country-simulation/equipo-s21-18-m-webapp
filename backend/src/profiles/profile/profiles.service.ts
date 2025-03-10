import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from '../schema/profile.model';
import { CreateProfileDto, UpdateProfileDto } from './dto/profiles.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async create(
    userId: string,
    createProfileDto: CreateProfileDto,
  ): Promise<Profile> {
    const newProfile = new this.profileModel({
      ...createProfileDto,
      user_id: userId,
    });
    return newProfile.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().populate('routines_id goals');
  }

  async findOne(id: string): Promise<Profile> {
    const profile = await this.profileModel
      .findById(id)
      .populate('routines_id goals');
    if (!profile) throw new NotFoundException('Perfil no encontrado');
    return profile;
  }

  async findOneByUserId(userId: string): Promise<Profile> {
    const profile = await this.profileModel
      .findOne({ user_id: userId })
      .populate('routines_id goals');
    if (!profile)
      throw new NotFoundException('Perfil no encontrado para este usuario');
    return profile;
  }

  async update(
    userId: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const profile = await this.profileModel.findOne({ user_id: userId });

    if (!profile) {
      throw new NotFoundException('Perfil no encontrado');
    }

    Object.assign(profile, updateProfileDto);
    return profile.save();
  }

  async remove(id: string): Promise<Profile> {
    return this.profileModel.findByIdAndDelete(id);
  }
}
