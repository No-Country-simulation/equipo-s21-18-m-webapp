import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/user/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(credentials: { email?: string; username?: string; password: string }) {
        const { email, username, password } = credentials;
        let user;

        // Busca al usuario por email o username
        if (email) {
            user = await this.usersService.findByEmail(email);
        } else if (username) {
            user = await this.usersService.findByUsername(username);
        }

        // Si no se encuentra el usuario o la contraseña no coincide, lanza una excepción
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return user;
    }

    async login(credentials: { email?: string; username?: string; password: string }) {
        const user = await this.validateUser(credentials);
        const payload = { sub: user._id, email: user.email, username: user.username, role: user.role };
        return { access_token: this.jwtService.sign(payload) };
    }
}