import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsEnum,
  IsMongoId,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRoutineDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(['fácil', 'intermedio', 'difícil'])
  difficult: string;

  @IsArray()
  @IsMongoId({ each: true })
  id_exercises: string[];
}

export class UpdateRoutineDto extends PartialType(CreateRoutineDto) {}
