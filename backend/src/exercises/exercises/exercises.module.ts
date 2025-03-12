import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Exercises, ExercisesSchema } from '../schema/exercises.model';
import { CloudinaryService } from './cloudinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Exercises.name, schema: ExercisesSchema}
    ]),
  ],
  providers: [ExercisesService, CloudinaryService],
  controllers: [ExercisesController]
})
export class ExercisesModule {}
