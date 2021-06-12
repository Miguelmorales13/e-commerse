import { CategoriesProduct } from "./entities/categories-product.entity";
import { getModelToken } from "@nestjs/sequelize";

export const CategoriesProductProvider = [
  {
    provide: getModelToken(CategoriesProduct),
    useValue: CategoriesProduct
  }
];