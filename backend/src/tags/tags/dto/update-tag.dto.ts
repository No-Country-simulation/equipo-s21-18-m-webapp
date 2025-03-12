import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateTagDto {
  @ApiProperty({
    example: 'Nutrición',
    description: 'Título del tag (opcional)',
  })
  @IsString()
  @IsOptional()
  readonly title?: string;
}
