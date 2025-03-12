import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { Exercises } from '../schema/exercises.model';
import { CreateExerciseDto, UpdateExerciseDto } from '../exercises/dtos/dtos/exercises.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExercisesService {

    constructor(
        @InjectModel(Exercises.name)
        private exerciseModel: Model<Exercises>,
    ) { }

    async findAll(): Promise<Exercises[]> {
        return this.exerciseModel.find().exec();
    }

    async findById(id: String) {
        const getExercise = this.exerciseModel.findById(id).exec();
        if (!getExercise) {
            throw new NotFoundException(`No se econtró ejercicio con ID ${id}`)
        }
        return getExercise;
    }

    async createExercise(createExerciseDto: CreateExerciseDto & {image: string}): Promise<Exercises> {
        const newExercise = new this.exerciseModel(createExerciseDto);
        return newExercise.save();
    }

    async updateExercise(id: string, updateExerciseDto: UpdateExerciseDto) {
        const updatedExercise = await this.exerciseModel.findByIdAndUpdate(id, updateExerciseDto, { new: true });
        if (!updatedExercise) {
            throw new NotFoundException(`No se halló ejercicio con id ${id}`)
        }
        return updatedExercise;
    }

    async deleteExercise(id: string) {
        const deletedExercise = await this.exerciseModel.findByIdAndDelete(id);
        if (!deletedExercise) {
            throw new NotFoundException(`No se encontró ejercicio con ID ${id}`)
        }
        return 'Se eliminó el ejercicio';
    }
}
