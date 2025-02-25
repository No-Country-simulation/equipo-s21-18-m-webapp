import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto, UpdateExerciseDto } from '../dtos/exercises.dto';
import { ObjectId } from 'mongoose';
import { Exercises } from '../schema/exercises.model';

@Controller('exercises')
export class ExercisesController {
    constructor(private readonly exerciseService: ExercisesService) {}

    @Get()
    getAllExercises() {
        return this.exerciseService.findAll();
    };

    @Get('/:id')
    getExercisesById(@Param('id') exercideId: String): Promise<Exercises> {
        return this.exerciseService.findById(exercideId);
    };

    @Post()
    createExercise(@Body() createData: CreateExerciseDto) {
        return this.exerciseService.createExercise(createData);
    };

    @Put('/:id')
    updatedExercise(@Param('id') exerciseId: string, @Body() updateData: UpdateExerciseDto) {
        return this.exerciseService.updateExercise(exerciseId, updateData);
    };

    @Delete('/:id')
    deleteExercises(@Param('id') exerciseId: string) {
        return this.exerciseService.deleteExercise(exerciseId);
    };
}
