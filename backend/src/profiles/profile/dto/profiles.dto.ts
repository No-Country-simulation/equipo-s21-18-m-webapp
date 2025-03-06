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

export class CreateProfileDto {
  @IsString()
  fullname: string;

  @IsArray()
  @IsMongoId({ each: true })
  routines_id: string[];

  @IsNumber()
  @Min(16)
  @Max(100)
  age: number;

  @IsNumber()
  @Min(1)
  weight: number;

  @IsNumber()
  @Min(1)
  height: number;

  @IsMongoId()
  @IsOptional()
  goals?: string;

  @IsMongoId()
  user_id: string;

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
