import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateExerciseDto{
    @IsString()
    @IsNotEmpty()
    tittle: string;

    @IsString()
    @IsNotEmpty()
    description: string;

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

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    duration: number;
}

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {}