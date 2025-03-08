import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateExerciseDto {
  @ApiProperty({ example: 'Sentadilla', description: 'Nombre del ejercicio' })
  @IsString()
  @IsNotEmpty()
  tittle: string;

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
  })
  @IsString()
  @IsNotEmpty()
  image: string;

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

  @ApiProperty({ example: 30, description: 'Duración en segundos' })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  duration: number;
}

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {}
