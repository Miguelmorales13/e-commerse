import { Product } from "./entities/product.entity";
import { getModelToken } from "@nestjs/sequelize";

export const ProductProvider = [
  {
    provide: getModelToken(Product),
    useValue: Product
  }
];