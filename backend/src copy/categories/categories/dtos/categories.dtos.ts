import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    title: String;

    @IsNotEmpty()
    @IsString()
    description: String;

    @IsMongoId({ each: true})
    @IsOptional()
    @IsArray()
    exercise_id: String[];
}   

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}