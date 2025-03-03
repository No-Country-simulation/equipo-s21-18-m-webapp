import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Tag extends Document {
    @Prop({ type: MongooseSchema.Types.ObjectId })
    _id: Types.ObjectId;

    @Prop({ required: true })
    title: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);