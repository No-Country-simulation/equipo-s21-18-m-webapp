import { IsString, IsNumber, Min, Max, IsMongoId, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  fullname: string;

  @IsMongoId({ each: true })
  @IsOptional()
  exercises_id?: string[];

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
}

export class UpdateProfileDto extends CreateProfileDto {}
