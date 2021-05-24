import { Module } from "@nestjs/common";
import { CategoriesProductsService } from "./categories-products.service";
import { CategoriesProductsController } from "./categories-products.controller";
import { CategoriesProductProvider } from "./categories-product.provider";

@Module({
  controllers: [CategoriesProductsController],
  providers: [
    CategoriesProductsService,
    ...CategoriesProductProvider
  ]
})
export class CategoriesProductsModule {
}
