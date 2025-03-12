import { Module } from '@nestjs/common';
import { RoutinesService } from './routines.service';
import { RoutinesController } from './routines.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Routine, RoutineSchema } from '../schema/routine.model';
import { AuthModule } from '../../auth/auth.module'



@Module({
  imports: [
    MongooseModule.forFeature([{ name: Routine.name, schema: RoutineSchema }]),
    AuthModule,
  ],
  controllers: [RoutinesController],
  providers: [RoutinesService],
})
export class RoutinesModule {}
