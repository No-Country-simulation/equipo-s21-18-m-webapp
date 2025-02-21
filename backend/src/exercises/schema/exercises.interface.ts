import { Document } from 'mongoose';

export interface Exercises extends Document {
    readonly title: string,
    readonly description: string,
    readonly image: string,
    readonly type: string,
    readonly sets: number,
    readonly reps: number,
    readonly duration: number
}