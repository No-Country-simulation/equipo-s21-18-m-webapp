import {
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsEnum,
  IsNotEmpty,
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
}
