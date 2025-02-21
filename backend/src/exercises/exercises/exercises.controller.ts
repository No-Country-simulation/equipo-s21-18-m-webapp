import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {

    @Get()
    getAllExercises() {

    };

    @Get('/:id')
    getExercisesById() {
        
    };

    @Post()
    createExercise() {

    };

    @Put('/:id')
    updatedExercise() {

    };

    @Delete('/:id')
    deleteExercises() {

    };
}
