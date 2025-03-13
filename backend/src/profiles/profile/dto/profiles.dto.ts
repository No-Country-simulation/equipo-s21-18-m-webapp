import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsMongoId,
  IsOptional,
  IsArray,
  IsEnum,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty({
    example: 'Juan Pérez',
    description: 'Nombre completo del usuario',
  })
  @IsString()
  fullname: string;

  /*@ApiProperty({
    example: ['60d5ec'],
    description: 'Lista de IDs de rutinas asociadas',
  })
  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  routines_id?: string[];*/

  @ApiProperty({
    example: 25,
    description: 'Edad del usuario',
    minimum: 16,
    maximum: 100,
  })
  @IsNumber()
  @Min(16)
  @Max(100)
  age: number;

  @ApiProperty({ example: 75, description: 'Peso en kilogramos', minimum: 1 })
  @IsNumber()
  @Min(1)
  weight: number;

  @ApiProperty({
    example: 175,
    description: 'Altura en centímetros',
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  height: number;

  @ApiProperty({
    example: 'Volumen',
    description: 'Objetivo del usuario',
    required: false,
  })
  @IsString()
  @IsOptional()
  goals?: string;

  @ApiProperty({
    example: 'moderadamente_activo',
    description: 'Nivel de actividad del usuario',
    enum: [
      'sedentario',
      'ligeramente_activo',
      'moderadamente_activo',
      'muy_activo',
      'extremadamente_activo',
    ],
  })
  @IsEnum([
    'sedentario',
    'ligeramente_activo',
    'moderadamente_activo',
    'muy_activo',
    'extremadamente_activo',
  ])
  level: string;
}

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
