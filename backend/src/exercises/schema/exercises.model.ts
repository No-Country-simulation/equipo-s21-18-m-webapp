import { Type } from '@nestjs/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

@Schema()
export class Exercises extends Document {
    @Prop({required: true})
    title: string;

    @Prop()
    description: string;

    @Prop()
    instructions: string;

    @Prop()
    benefits: string;

    @Prop()
    image: string;

    @Prop({enum: ['Para el hogar', 'Para el gimnasio']})
    type: string;
    
    @Prop()
    sets: number;

    @Prop()
    reps: number;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Tag'})
    tag_id: Types.ObjectId[];

    @Prop({enum: ['beginner', 'intermediate', 'advanced']})
    level: string;
}

export const ExercisesSchema = SchemaFactory.createForClass(Exercises);