import {
  IsString,
  IsNotEmpty,
  IsMongoId,
  IsOptional,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Cardio', description: 'Título de la categoría' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Ejercicios aeróbicos para mejorar la resistencia',
    description: 'Descripción de la categoría',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: ['60d5ec'],
    description: 'Lista de IDs de ejercicios relacionados',
    required: false,
  })
  @IsMongoId({ each: true })
  @IsOptional()
  @IsArray()
  exercise_id: string[];
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
