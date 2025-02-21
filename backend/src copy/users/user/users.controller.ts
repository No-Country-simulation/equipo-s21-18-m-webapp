import { Controller, Post, Patch, Delete, Body, BadRequestException, UseGuards, Get, Req, ForbiddenException, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src copy/auth/guards/jwt-auth.guard';

@Controller('users') // Define el controlador para las rutas bajo el prefijo 'users'
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    // Endpoint para registrar un nuevo usuario
    @Post('register')
    async register(@Body() body: { email: string; password: string }) {
        const { email, password } = body;

        // Verifica si el email ya está en uso
        const existingUser = await this.usersService.findByEmail(email);
        if (existingUser) {
            throw new BadRequestException('Email already in use');
        }

        // Crea un nuevo usuario si el email no está en uso
        const newUser = await this.usersService.createUser(email, password);
        return { message: 'User registered successfully', userId: newUser._id };
    }

    // Endpoint para obtener el perfil del usuario autenticado
    @Get('profile')
    @UseGuards(JwtAuthGuard) // Protege la ruta con el guard de autenticación JWT
    getProfile(@Req() req) {
        // Devuelve la información del usuario autenticado
        return req.user;
    }

    // Endpoint para obtener todos los usuarios (solo accesible por administradores)
    @Get()
    @UseGuards(JwtAuthGuard)
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
    async updateUser(
        @Param('id') id: string, // Obtiene el ID del usuario a actualizar desde los parámetros de la URL
        @Body() body: { password?: string; role?: string }, // Obtiene los campos a actualizar desde el cuerpo de la solicitud
        @Req() req
    ) {
        // Busca el usuario por ID
        const user = await this.usersService.findById(id);
        if (!user) {
            throw new BadRequestException('User not found');
        }

        // Verifica si se intenta cambiar el rol y si el usuario autenticado es un administrador
        if (body.role && req.user.role !== 'admin') {
            throw new ForbiddenException('Only admins can change roles');
        }

        // Actualiza la información del usuario
        return await this.usersService.updateUser(id, body);
    }

    // Endpoint para eliminar un usuario (solo accesible por administradores)
    @Delete(':id')
    @UseGuards(JwtAuthGuard)
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
    async resetPassword(@Body() body: { email: string }) {
        // Busca el usuario por email
        const user = await this.usersService.findByEmail(body.email);
        if (!user) {
            throw new BadRequestException('User not found');
        }

        // Genera un token de restablecimiento de contraseña usando el _id del usuario
        const resetToken = await this.usersService.generateResetToken(user._id.toString());
        return { message: 'Reset token generated', resetToken };
    }
}