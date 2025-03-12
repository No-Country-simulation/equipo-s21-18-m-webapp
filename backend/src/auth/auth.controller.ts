import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Inicio de sesión' }) //Endpoint
  @ApiBody({ type: LoginDto })
  async login(
    @Body() body: { email?: string; username?: string; password: string },
  ) {
    return this.authService.login(body);
  }
}
