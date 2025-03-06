import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

@Schema()
export class Category extends Document{

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Exercises'})
    exercise_id: Types.ObjectId[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);