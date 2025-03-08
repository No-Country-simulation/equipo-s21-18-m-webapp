import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto, UpdateProfileDto } from './dto/profiles.dto';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nuevo perfil' })
  @ApiBody({ type: CreateProfileDto })
  @ApiResponse({ status: 201, description: 'Perfil creado exitosamente' })
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los perfiles' })
  @ApiResponse({
    status: 200,
    description: 'Lista de perfiles obtenida exitosamente',
  })
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener perfil por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID del perfil' })
  @ApiResponse({ status: 200, description: 'Perfil encontrado exitosamente' })
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar perfil' })
  @ApiParam({ name: 'id', type: String, description: 'ID del perfil' })
  @ApiBody({ type: UpdateProfileDto })
  @ApiResponse({ status: 200, description: 'Perfil actualizado exitosamente' })
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un perfil' })
  @ApiParam({ name: 'id', type: String, description: 'ID del perfil' })
  @ApiResponse({ status: 200, description: 'Perfil eliminado exitosamente' })
  remove(@Param('id') id: string) {
    return this.profilesService.remove(id);
  }
}
