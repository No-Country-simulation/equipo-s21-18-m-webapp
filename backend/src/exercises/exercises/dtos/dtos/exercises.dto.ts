import { IsString, IsNotEmpty, IsNumber, IsPositive, IsArray, IsMongoId, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateExerciseDto{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    instructions: string;

    @IsString()
    @IsNotEmpty()
    benefits: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    sets: number;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    reps: number;

    @IsArray()
    @IsMongoId({each: true})
    @IsOptional()
    tag_id: string[];

    @IsString()
    @IsNotEmpty()
    level: string;

    @IsString()
    @IsNotEmpty()
    category: string;
}

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {}