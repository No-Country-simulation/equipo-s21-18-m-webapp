import { Module } from '@nestjs/common';
import { RoutinesService } from './routines.service';
import { RoutinesController } from './routines.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Routine, RoutineSchema } from '../schema/routine.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Routine.name, schema: RoutineSchema }]),
  ],
  controllers: [RoutinesController],
  providers: [RoutinesService],
})
export class RoutinesModule {}
