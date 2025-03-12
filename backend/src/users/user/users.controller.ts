import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  BadRequestException,
  UseGuards,
  Get,
  Req,
  ForbiddenException,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Types } from 'mongoose';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users') // Define el controlador para las rutas bajo el prefijo 'users'
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Endpoint para registrar un nuevo usuario
  @Post('register')
  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente' })
  @ApiResponse({ status: 400, description: 'Email o username ya utilizado' })
  async register(@Body() createUserDto: CreateUserDto) {
    // Usa la DTO para validar los datos de entrada
    const { email, password, username } = createUserDto;

    // Verifica si el email ya está en uso
    const existingUserByEmail = await this.usersService.findByEmail(email);
    if (existingUserByEmail) {
      throw new BadRequestException('Email already in use');
    }

    // Verifica si el nombre de usuario ya está en uso
    const existingUserByUsername =
      await this.usersService.findByUsername(username);
    if (existingUserByUsername) {
      throw new BadRequestException('Username already in use');
    }

    // Crea un nuevo usuario si el email y el nombre de usuario no están en uso
    const newUser = await this.usersService.createUser(
      email,
      password,
      username,
    );
    return { message: 'User registered successfully', userId: newUser._id };
  }

  // Endpoint para obtener el perfil del usuario autenticado
  @Get('profile')
  @UseGuards(JwtAuthGuard) // Protege la ruta con el guard de autenticación JWT
  @ApiOperation({ summary: 'Obtener el perfil del usuario autenticado' })
  @ApiResponse({
    status: 200,
    description: 'Perfil del usuario retornado exitosamente',
  })
  getProfile(@Req() req) {
    // Devuelve la información del usuario autenticado
    return req.user;
  }

  // Endpoint para obtener todos los usuarios (solo accesible por administradores)
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Obtener todos los usuarios (Solo administradores)',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuarios obtenida exitosamente',
  })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async getAllUsers(@Req() req) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Access denied');
    }

    // Devuelve todos los usuarios si el usuario es un administrador
    return await this.usersService.findAll();
  }

  // Endpoint para actualizar la información de un usuario
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Actualizar información de un usuario' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID del usuario a actualizar',
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'Usuario actualizado correctamente',
  })
  @ApiResponse({
    status: 403,
    description: 'Solo puedes actualizar tu propio perfil',
  })
  async updateUser(
    @Param('id') id: string, // Obtiene el ID del usuario a actualizar desde los parámetros de la URL
    @Body() updateUserDto: UpdateUserDto, // Usa la DTO para validar los datos de entrada
    @Req() req,
  ) {
    // Verifica permisos
    if (req.user.id !== id && req.user.role !== 'admin') {
      throw new ForbiddenException('You can only update your own profile');
    }

    // Verifica si se intenta cambiar el rol
    if (updateUserDto.role && req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can change roles');
    }

    // Actualiza la información del usuario
    const updatedUser = await this.usersService.updateUser(id, updateUserDto);

    // Si no se encuentra el usuario, lanza una excepción
    if (!updatedUser) {
      throw new BadRequestException('User not found');
    }

    return updatedUser;
  }

  // Endpoint para eliminar un usuario (solo accesible por administradores)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Eliminar un usuario (Solo administradores)' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID del usuario a eliminar',
  })
  @ApiResponse({ status: 200, description: 'Usuario eliminado correctamente' })
  @ApiResponse({
    status: 403,
    description: 'Solo los administradores pueden eliminar usuarios',
  })
  async deleteUser(@Param('id') id: string, @Req() req) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can delete users');
    }

    // Elimina el usuario si el usuario autenticado es un administrador
    return await this.usersService.deleteUser(id);
  }

  // Endpoint para generar un token de restablecimiento de contraseña
  @Post('reset-password')
  @ApiOperation({ summary: 'Generar un token de restablecimiento de contraseña' })
    @ApiBody({ schema: { properties: { email: { type: 'string' } } } })
    @ApiResponse({ status: 200, description: 'Token de restablecimiento generado' })
    @ApiResponse({ status: 400, description: 'Usuario no encontrado' })
  async resetPassword(@Body() body: { email: string }) {
    // Busca el usuario por email
    const user = await this.usersService.findByEmail(body.email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Genera un token de restablecimiento de contraseña usando el _id del usuario
    const resetToken = await this.usersService.generateResetToken(
      user._id.toString(),
    );
    return { message: 'Reset token generated', resetToken };
  }
}
