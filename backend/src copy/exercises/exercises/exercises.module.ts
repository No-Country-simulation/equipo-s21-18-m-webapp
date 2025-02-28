import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Exercises, ExercisesSchema } from '../schema/exercises.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Exercises.name, schema: ExercisesSchema}
    ]),
  ],
  providers: [ExercisesService],
  controllers: [ExercisesController]
})
export class ExercisesModule {}
