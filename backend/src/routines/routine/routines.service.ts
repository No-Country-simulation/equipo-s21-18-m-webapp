import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Routine, RoutineDocument } from '../schema/routine.model';
import { CreateRoutineDto, UpdateRoutineDto } from './dto/routines.dto';


@Injectable()
export class RoutinesService {
  constructor(
   
    @InjectModel(Routine.name) private routineModel: Model<RoutineDocument>,
  ) {}

  async create(data: CreateRoutineDto) {
    const routine = new this.routineModel(data);
    return routine.save();
  }

  async findAll() {
    return this.routineModel.find().populate('id_exercises').exec();
  }

  
  async findOne(id: string) {
    const routine = await this.routineModel
      .findById(id)
      .populate('id_exercises')
      .exec();
    if (!routine) throw new NotFoundException('Routine not found');
    return routine;
  }

  async getUserRoutines(userId: string): Promise<Routine[]> {
    return this.routineModel.find({ userId }).exec();
  }

  async update(id: string, updateData: UpdateRoutineDto) {
    const routine = await this.routineModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!routine) throw new NotFoundException('Routine not found');
    return routine;
  }

  async delete(id: string) {
    const routine = await this.routineModel.findByIdAndDelete(id);
    if (!routine) throw new NotFoundException('Routine not found');
    return { message: 'Routine deleted successfully' };
  }
}
