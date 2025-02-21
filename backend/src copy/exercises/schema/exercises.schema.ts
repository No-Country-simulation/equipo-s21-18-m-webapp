import * as mongoose from 'mongoose';

export const exercisesSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    image: String,
})