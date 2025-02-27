import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class Profile extends Document {
  @Prop({ required: true })
  fullname: string;

  @Prop({ type: [Types.ObjectId], ref: 'Exercise' })
  exercises_id: Types.ObjectId[];

  @Prop({ required: true, min: 16, max: 100 })
  age: number;

  @Prop({ required: true, min: 1 })
  weight: number;

  @Prop({ required: true, min: 1 })
  height: number;

  @Prop({ type: Types.ObjectId, ref: 'Goal' })
  goals: Types.ObjectId;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
