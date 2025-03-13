import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto, UpdateProfileDto } from './dto/profiles.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Profiles')
@ApiBearerAuth() 
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Crear perfil para el usuario autenticado' })
  @ApiBody({ type: CreateProfileDto })
  @ApiResponse({ status: 201, description: 'Perfil creado exitosamente' })
  create(@Body() createProfileDto: CreateProfileDto, @Request() req) {
    return this.profilesService.create(req.user.id, createProfileDto);
  }

  //@Get()
  //@UseGuards(JwtAuthGuard)
  //@ApiOperation({ summary: 'Obtener todos los perfiles' })
  //@ApiResponse({
  //  status: 200,
  //  description: 'Lista de perfiles obtenida exitosamente',
  //})
  //findAll() {
  //  return this.profilesService.findAll();
  //}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Obtener el perfil del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Perfil obtenido exitosamente' })
  findMyProfile(@Request() req) {
    return this.profilesService.findOneByUserId(req.user.id);
  }

  //@Get(':id')
  //@ApiOperation({ summary: 'Obtener perfil por ID' })
  //@ApiParam({ name: 'id', type: String, description: 'ID del perfil' })
  //@ApiResponse({ status: 200, description: 'Perfil encontrado exitosamente' })
  //findOne(@Param('id') id: string) {
  //  return this.profilesService.findOne(id);
  //}

  @Put()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Actualizar perfil del usuario autenticado' })
  @ApiBody({ type: UpdateProfileDto })
  @ApiResponse({ status: 200, description: 'Perfil actualizado exitosamente' })
  update(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
    const userId = req.user.userId; // Obtener el userId del usuario autenticado
    return this.profilesService.update(userId, updateProfileDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Eliminar un perfil' })
  @ApiParam({ name: 'id', type: String, description: 'ID del perfil' })
  @ApiResponse({ status: 200, description: 'Perfil eliminado exitosamente' })
  remove(@Param('id') id: string) {
    return this.profilesService.remove(id);
  }
}
