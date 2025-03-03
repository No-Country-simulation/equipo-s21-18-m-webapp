import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos/categories.dtos';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
constructor(
    private readonly categoriesService: CategoriesService
) {}

    @Post()
    create(@Body() createCategotyDto: CreateCategoryDto) {
        return this.categoriesService.createCategories(createCategotyDto);
    }

    @Get()
    findAll(){
        return this.categoriesService.getAllCategories();
    }

    @Get('/:id')
    findById(@Param('id') id: String) {
        return this.categoriesService.getCategoriesById(id);
    }

    @Put('/:id')
    update(@Param('id') id: String, @Body() categoryData: UpdateCategoryDto) {
        return this.categoriesService.updateCategory(id, categoryData);
    }

    @Delete('/:id')
    delete(@Param() id: String) {
        return this.categoriesService.deleteCategory(id);
    }
}
