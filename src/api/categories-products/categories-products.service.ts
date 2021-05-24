import { Inject, Injectable } from "@nestjs/common";
import { CreateCategoriesProductDto } from "./dto/create-categories-product.dto";
import { UpdateCategoriesProductDto } from "./dto/update-categories-product.dto";
import { SequelizeCrudService } from "../crud/sequelize-crud-service";
import { CategoriesProduct } from "./entities/categories-product.entity";
import { getModelToken } from "@nestjs/sequelize";

@Injectable()
export class CategoriesProductsService extends SequelizeCrudService<CategoriesProduct, CreateCategoriesProductDto, UpdateCategoriesProductDto> {
  constructor(@Inject(getModelToken(CategoriesProduct)) private readonly categoriesProductProvider: typeof CategoriesProduct) {
    super(categoriesProductProvider);
  }
}
