import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { getModelToken } from "@nestjs/sequelize";
import { Product } from "./entities/product.entity";
import { SequelizeCrudService } from "../crud/sequelize-crud-service";

@Injectable()
export class ProductsService extends SequelizeCrudService<Product, CreateProductDto, UpdateProductDto> {
  constructor(@Inject(getModelToken(Product)) private readonly productProvider: typeof Product) {
    super(productProvider);
  }
}
