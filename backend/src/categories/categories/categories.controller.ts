import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos/categories.dtos';
import { CategoriesService } from './categories.service';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nueva categoría' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({ status: 201, description: 'Categoría creada exitosamente' })
  create(@Body() createCategotyDto: CreateCategoryDto) {
    return this.categoriesService.createCategories(createCategotyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las categorías' })
  @ApiResponse({
    status: 200,
    description: 'Lista de categorías obtenida exitosamente',
  })
  findAll() {
    return this.categoriesService.getAllCategories();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Obtener categoría por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la categoría' })
  @ApiResponse({
    status: 200,
    description: 'Categoría encontrada exitosamente',
  })
  findById(@Param('id') id: string) {
    return this.categoriesService.getCategoriesById(id);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Actualizar categoría' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la categoría' })
  @ApiBody({ type: UpdateCategoryDto })
  @ApiResponse({
    status: 200,
    description: 'Categoría actualizada exitosamente',
  })
  update(@Param('id') id: string, @Body() categoryData: UpdateCategoryDto) {
    return this.categoriesService.updateCategory(id, categoryData);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Eliminar categoría' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la categoría' })
  @ApiResponse({ status: 200, description: 'Categoría eliminada exitosamente' })
  delete(@Param() id: string) {
    return this.categoriesService.deleteCategory(id);
  }
}
