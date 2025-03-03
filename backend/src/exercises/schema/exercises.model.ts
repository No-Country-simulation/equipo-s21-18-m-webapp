import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Exercises extends Document {
    @Prop({required: true})
    tittle: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop({enum: ['Para el hogar', 'Para el gimnasio']})
    type: string;
    
    @Prop()
    sets: number;

    @Prop()
    reps: number;

    @Prop()
    duration: number;

}

export const ExercisesSchema = SchemaFactory.createForClass(Exercises);