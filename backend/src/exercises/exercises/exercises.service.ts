import { Injectable, Inject } from '@nestjs/common';
import { exercisesModel, exercisesSchema } from '../schema/exercises.schema';
import { Model } from 'mongoose';
import { Exercises } from '../schema/exercises.interface';



@Injectable()
export class ExercisesService {

    constructor(
        @Inject('EXERCISES_MODEL')
        private exerciseModel: Model<Exercises>,
    ) {}

    async getExercises() {
        
    }
}
