import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'usuario@example.com', required: false })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ example: 'miUsuario', required: false })
    @IsOptional()
    @IsString()
    username?: string;

    @ApiProperty({ example: 'MiClaveSecreta123' })
    @IsString()
    password: string;
}