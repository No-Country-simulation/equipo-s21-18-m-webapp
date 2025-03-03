import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('tags')
@UseGuards(JwtAuthGuard)
export class TagsController {
  constructor(private readonly tagsService: TagsService) { }

  // Endpoint para crear un nuevo tag (solo accesible por administradores)
  @Post()
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
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto, @Req() req) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can update tags');
    }

    // Actualiza el tag si el usuario es un administrador
    return this.tagsService.update(id, updateTagDto);
  }

  // Endpoint para eliminar un tag (solo accesible por administradores)
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    // Verifica si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admins can delete tags');
    }

    // Elimina el tag si el usuario es un administrador
    return this.tagsService.remove(id);
  }
}