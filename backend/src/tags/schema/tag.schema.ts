import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tag extends Document {
    @Prop({ required: true })
    title: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);