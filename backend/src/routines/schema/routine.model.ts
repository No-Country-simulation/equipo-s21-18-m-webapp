import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RoutineDocument = Routine & Document;

@Schema({ timestamps: true })
export class Routine {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ enum: ['fácil', 'intermedio', 'avanzado'], required: true })
  difficult: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Exercise' }], default: [] })
  id_exercises: Types.ObjectId[];

  @Prop({ required: true }) 
  user_id: string;
}

export const RoutineSchema = SchemaFactory.createForClass(Routine);