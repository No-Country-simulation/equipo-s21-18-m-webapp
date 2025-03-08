import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({ example: 'Fitness', description: 'Título del tag' })
  @IsString()
  @IsNotEmpty()
  readonly title: string;
}
