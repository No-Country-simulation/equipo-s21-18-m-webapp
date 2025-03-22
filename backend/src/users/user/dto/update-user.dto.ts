import {
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsEnum,
  IsNotEmpty,
  IsArray,
  IsMongoId,
  IsNumber,
  Max,
  Min,
} from 'class-validator';
import { UserRole } from '../../model/users.schema';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    example: 'newSecurePass123',
    description:
      'Nueva contraseña del usuario (mínimo 6 caracteres, máximo 20)',
  })
  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password cannot be longer than 20 characters' })
  password?: string;

  @ApiPropertyOptional({
    example: 'admin',
    description: 'Rol del usuario (user o admin)',
    enum: UserRole,
  })
  @IsOptional()
  @IsEnum(UserRole, { message: 'Role must be either "user" or "admin"' })
  role?: UserRole;

  @ApiPropertyOptional({
    example: 'JaneDoe',
    description: 'Nuevo nombre de usuario',
  })
  @IsOptional()
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username cannot be empty' })
  username?: string;

  @ApiProperty({
    example: ['60d5ec'],
    description: 'Lista de IDs de rutinas asociadas',
  })
  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  routines_id?: string[];

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
