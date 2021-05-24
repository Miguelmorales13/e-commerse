import { Module } from "@nestjs/common";
import { ImagesProductsService } from "./images-products.service";
import { ImagesProductsController } from "./images-products.controller";
import { ImagesProductProvider } from "./images-product.provider";

@Module({
  controllers: [ImagesProductsController],
  providers: [ImagesProductsService, ...ImagesProductProvider]
})
export class ImagesProductsModule {
}
