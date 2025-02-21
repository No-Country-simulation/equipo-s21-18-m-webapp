import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
    _id: Types.ObjectId;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    // @Prop({ required: true, unique: true })
    // profile_id: string;

    @Prop({ enum: ['user', 'admin'], default: 'user' })
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);