import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsArray,
  IsMongoId,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExerciseDto {
  @ApiProperty({ example: 'Sentadilla', description: 'Nombre del ejercicio' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Ejercicio para fortalecer las piernas',
    description: 'Descripción del ejercicio',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'https://imagen-ejemplo.com/sentadilla.jpg',
    description: 'URL de la imagen del ejercicio',
    type: 'string',
    format: 'binary'
  })
  @IsNotEmpty()
  image: any;

  @ApiProperty({
    example: 'Coloca los pies al ancho de los hombros y baja lentamente.',
    description: 'Instrucciones para realizar el ejercicio correctamente.',
  })
  @IsString()
  @IsNotEmpty()
  instructions: string;

  @ApiProperty({
    example: 'Fortalece cuádriceps, glúteos y isquiotibiales.',
    description: 'Beneficios del ejercicio',
  })
  @IsString()
  @IsNotEmpty()
  benefits: string;

  @ApiProperty({ example: 'Fuerza', description: 'Tipo de ejercicio' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 3, description: 'Número de series recomendadas' })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  sets: number;

  @ApiProperty({ example: 12, description: 'Número de repeticiones por serie' })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  reps: number;

  @ApiProperty({
    example: ['60f7b2c6c8d1d8f3b4a1a2c3', '60f7b2c6c8d1d8f3b4a1a2c4'],
    description: 'Lista de IDs de etiquetas asociadas al ejercicio',
    type: [String],
  })
  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  tag_id: string[];

  @ApiProperty({
    example: 'Intermedio',
    description: 'Nivel de dificultad del ejercicio',
  })
  @IsString()
  @IsNotEmpty()
  level: string;

  @ApiProperty({
    example: 'Piernas',
    description:
      'Categoría del ejercicio según la parte del cuerpo que trabaja',
  })
  @IsString()
  @IsNotEmpty()
  category: string;
}

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {}
