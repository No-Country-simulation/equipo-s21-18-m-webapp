import { Inject } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';


export const exercisesSchema = new mongoose.Schema({
    id: ObjectId,
    title: String, 
    description: String, 
    image: String,
    type: String,
    sets: Number,
    reps: Number,
    duration: Number // En minutos
}); 

export const exercisesModel = [
    {
        provide: 'EXERCISES_MODEL',
        useFactory: (connection: Connection) => connection.model('Exercises', exercisesSchema),
        inject: 'DATABASE_CONNECTION'
    }
];