import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsEnum,
  IsMongoId,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoutineDto {
  @ApiProperty({
    example: 'Rutina de fuerza',
    description: 'Nombre de la rutina',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Ejercicios para mejorar la fuerza muscular',
    description: 'Descripción de la rutina',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'intermedio',
    description: 'Nivel de dificultad de la rutina',
    enum: ['fácil', 'intermedio', 'avanzado'],
  })
  @IsEnum(['fácil', 'intermedio', 'avanzado'])
  difficult: string;

  @ApiProperty({ 
    example: ['60d5ec', '60d5ec'], 
    description: 'Lista de IDs de ejercicios' 
  })
  @IsArray()
  @IsMongoId({ each: true })
  id_exercises: string[];

}

export class UpdateRoutineDto extends PartialType(CreateRoutineDto) {}
