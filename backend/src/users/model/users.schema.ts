import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

// Define el enum para los roles
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  routines_id: Types.ObjectId[];

  @Prop({ required: false })
  age: number;

  @Prop({ required: false })
  weight: number;

  @Prop({ required: false })
  height: number;

  @Prop({ enum: ['Definición', 'Volumen'] })
  goals: string;

  @Prop({
    required: false,
    enum: [
      'sedentario',
      'ligeramente_activo',
      'moderadamente_activo',
      'muy_activo',
      'extremadamente_activo',
    ],
  })
  level: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
