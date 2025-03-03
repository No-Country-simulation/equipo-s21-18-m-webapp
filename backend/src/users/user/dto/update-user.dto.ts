import { IsString, MinLength, MaxLength, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';
import { UserRole } from '../../model/users.schema'; 

export class UpdateUserDto {
    @IsOptional() 
    @IsString({ message: 'Password must be a string' })
    @MinLength(6, { message: 'Password must be at least 6 characters long' }) 
    @MaxLength(20, { message: 'Password cannot be longer than 20 characters' }) 
    password?: string;

    @IsOptional() 
    @IsEnum(UserRole, { message: 'Role must be either "user" or "admin"' }) 
    role?: UserRole;

    @IsOptional() 
    @IsString({ message: 'Username must be a string' }) 
    @IsNotEmpty({ message: 'Username cannot be empty' }) 
    username?: string;
}