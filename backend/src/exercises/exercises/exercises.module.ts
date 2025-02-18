import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';

@Module({
  providers: [ExercisesService],
  controllers: [ExercisesController]
})
export class ExercisesModule {}
