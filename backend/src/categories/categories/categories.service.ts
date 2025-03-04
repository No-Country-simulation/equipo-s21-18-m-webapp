import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CategorySchema, Category } from '../schema/categories.model';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos/categories.dtos';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category.name)
        private categoriesModel: Model<Category>
    ) {}

    // Creación de Categorías
    async createCategories(categoryData: CreateCategoryDto) {
        const newCategory = new this.categoriesModel(categoryData);
        return newCategory.save();
    }

    //Obtener todas las categorías
    async getAllCategories () {
        const getCategories = this.categoriesModel.find().exec();
        return getCategories;
    }

    //Obtener categorías por ID
    async getCategoriesById(id: String) {
        const findCategory = this.categoriesModel.findById(id).exec();
        if(!findCategory){
            throw new NotFoundException(`No se encotró categoría con ID ${id}`)
        }
        return findCategory;
    }

    // Editar o actualizar categorías
    async updateCategory(id: String, categoryData: UpdateCategoryDto) {
        const categoryUpdated = this.categoriesModel.findByIdAndUpdate(id, categoryData);
        if(!categoryData){
            throw new NotFoundException(`No se encotró categoría con ID ${id}`)
        }
        return categoryUpdated;
    }

    //Eliminar Categoría
    async deleteCategory(id: String) {
        const categoryDeleted = this.categoriesModel.findByIdAndDelete(id);
        if(!categoryDeleted){
            throw new NotFoundException(`No se encotró categoría con ID ${id}`)
        }
        return 'Se eliminó la categoría';
    }
}
