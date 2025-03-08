import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import {
  CreateExerciseDto,
  UpdateExerciseDto,
} from './dtos/dtos/exercises.dto';
import { ObjectId } from 'mongoose';
import { Exercises } from '../schema/exercises.model';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Ejercicios (Solo Usuarios admin)')
@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exerciseService: ExercisesService) {}

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los ejercicios',
    description:
      'Devuelve una lista de todos los ejercicios almacenados en la base de datos.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de ejercicios recuperada correctamente.',
  })
  getAllExercises() {
    return this.exerciseService.findAll();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Obtener un ejercicio por ID',
    description:
      'Busca un ejercicio en la base de datos por su ID y lo devuelve.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID del ejercicio a buscar',
  })
  @ApiResponse({
    status: 200,
    description: 'Ejercicio encontrado exitosamente.',
  })
  @ApiResponse({ status: 404, description: 'Ejercicio no encontrado.' })
  getExercisesById(@Param('id') exercideId: String): Promise<Exercises> {
    return this.exerciseService.findById(exercideId);
  }

  @Post()
  @ApiOperation({
    summary: 'Crear un nuevo ejercicio',
    description: 'Crea y almacena un nuevo ejercicio en la base de datos.',
  })
  @ApiBody({ type: CreateExerciseDto })
  @ApiResponse({ status: 201, description: 'Ejercicio creado correctamente.' })
  createExercise(@Body() createData: CreateExerciseDto) {
    return this.exerciseService.createExercise(createData);
  }

  @Put('/:id')
  @ApiOperation({
    summary: 'Actualizar un ejercicio',
    description: 'Actualiza los datos de un ejercicio existente usando su ID.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID del ejercicio a actualizar',
  })
  @ApiBody({ type: UpdateExerciseDto })
  @ApiResponse({
    status: 200,
    description: 'Ejercicio actualizado correctamente.',
  })
  @ApiResponse({ status: 404, description: 'Ejercicio no encontrado.' })
  updatedExercise(
    @Param('id') exerciseId: string,
    @Body() updateData: UpdateExerciseDto,
  ) {
    return this.exerciseService.updateExercise(exerciseId, updateData);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Eliminar un ejercicio',
    description: 'Elimina un ejercicio de la base de datos usando su ID.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID del ejercicio a eliminar',
  })
  @ApiResponse({
    status: 200,
    description: 'Ejercicio eliminado correctamente.',
  })
  @ApiResponse({ status: 404, description: 'Ejercicio no encontrado.' })
  deleteExercises(@Param('id') exerciseId: string) {
    return this.exerciseService.deleteExercise(exerciseId);
  }
}
