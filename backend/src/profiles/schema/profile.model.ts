import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class Profile extends Document {
  @Prop({ required: true })
  fullname: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Routine' }], default: [] })
  routines_id: Types.ObjectId[];

  @Prop({ required: true, min: 16, max: 100 })
  age: number;

  @Prop({ required: true, min: 1 })
  weight: number;

  @Prop({ required: true, min: 1 })
  height: number;

  @Prop({ type: Types.ObjectId, ref: 'Goal' })
  goals: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Prop({
    enum: [
      'sedentario',
      'ligeramente_activo',
      'moderadamente_activo',
      'muy_activo',
      'extremadamente_activo',
    ],
    required: true,
  })
  level: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
