import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Tag } from '../schema/tag.schema';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) { }

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const createdTag = new this.tagModel(createTagDto);
    return createdTag.save();
  }

  async findAll(): Promise<Tag[]> {
    return this.tagModel.find().exec();
  }

  async findOne(id: string): Promise<Tag> {
    return this.tagModel.findById(new Types.ObjectId(id)).exec();
  }

  async update(id: string, updateTagDto: UpdateTagDto): Promise<Tag> {
    return this.tagModel.findByIdAndUpdate(new Types.ObjectId(id), updateTagDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Tag> {
    return this.tagModel.findByIdAndDelete(new Types.ObjectId(id)).exec();
  }
}