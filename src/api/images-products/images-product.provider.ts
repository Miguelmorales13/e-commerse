import { ImagesProduct } from "./entities/images-product.entity";
import { getModelToken } from "@nestjs/sequelize";

export const ImagesProductProvider = [
  {
    provide: getModelToken(ImagesProduct),
    useValue: ImagesProduct
  }
];