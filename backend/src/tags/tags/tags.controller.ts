import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Tags')
@ApiBearerAuth()
@Controller('tags')
@UseGuards(JwtAuthGuard)
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  // Endpoint para crear un nuevo tag (solo accesible por administradores)
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo tag (Solo administradores)' })
  @ApiBody({ type: CreateTagDto })
  @ApiResponse({ status: 201, description: 'Tag creado exitosamente' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async create(@Body() createTagDto: CreateTagDto, @Req() req) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can create tags');
    }

    // Crea el tag si el usuario es un administrador
    return this.tagsService.create(createTagDto);
  }

  // Endpoint para obtener todos los tags (solo accesible por administradores)
  @Get()
  @ApiOperation({ summary: 'Obtener todos los tags (Solo administradores)' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tags obtenida exitosamente',
  })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async findAll(@Req() req) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can view all tags');
    }

    // Devuelve todos los tags si el usuario es un administrador
    return this.tagsService.findAll();
  }

  // Endpoint para obtener un tag por ID (solo accesible por administradores)
  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tag por ID (Solo administradores)' })
  @ApiParam({ name: 'id', type: String, description: 'ID del tag' })
  @ApiResponse({ status: 200, description: 'Tag encontrado exitosamente' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async findOne(@Param('id') id: string, @Req() req) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can view tags');
    }

    // Devuelve el tag si el usuario es un administrador
    return this.tagsService.findOne(id);
  }

  // Endpoint para actualizar un tag (solo accesible por administradores)
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un tag (Solo administradores)' })
  @ApiParam({ name: 'id', type: String, description: 'ID del tag' })
  @ApiBody({ type: UpdateTagDto })
  @ApiResponse({ status: 200, description: 'Tag actualizado exitosamente' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async update(
    @Param('id') id: string,
    @Body() updateTagDto: UpdateTagDto,
    @Req() req,
  ) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can update tags');
    }

    // Actualiza el tag si el usuario es un administrador
    return this.tagsService.update(id, updateTagDto);
  }

  // Endpoint para eliminar un tag (solo accesible por administradores)
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un tag (Solo administradores)' })
  @ApiParam({ name: 'id', type: String, description: 'ID del tag' })
  @ApiResponse({ status: 200, description: 'Tag eliminado exitosamente' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async remove(@Param('id') id: string, @Req() req) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can delete tags');
    }

    // Elimina el tag si el usuario es un administrador
    return this.tagsService.remove(id);
  }
}
