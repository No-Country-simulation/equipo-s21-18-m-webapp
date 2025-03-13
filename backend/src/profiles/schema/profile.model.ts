import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

@Schema()
export class Profile extends Document {
  @Prop({ required: true })
  fullname: string;

  //@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Routine' }] })
  //routines_id: mongoose.Types.ObjectId[];

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  height: number;

  @Prop({ enum: ['Definición', 'Volumen'] })
  goals: string;

  @Prop({
    required: true,
    enum: [
      'sedentario',
      'ligeramente_activo',
      'moderadamente_activo',
      'muy_activo',
      'extremadamente_activo',
    ],
  })
  level: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user_id: mongoose.Types.ObjectId;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
