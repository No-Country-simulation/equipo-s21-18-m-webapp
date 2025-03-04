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

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const newProfile = new this.profileModel(createProfileDto);
    return newProfile.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().populate('exercises_id goals');
  }

  async findOne(id: string): Promise<Profile> {
    const profile = await this.profileModel
      .findById(id)
      .populate('exercises_id goals');
    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }

  async update(
    id: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profileModel.findByIdAndUpdate(id, updateProfileDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Profile> {
    return this.profileModel.findByIdAndDelete(id);
  }
}
