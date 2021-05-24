import { Module } from '@nestjs/common';
import { ImagesProductsService } from './images-products.service';
import { ImagesProductsController } from './images-products.controller';

@Module({
  controllers: [ImagesProductsController],
  providers: [ImagesProductsService]
})
export class ImagesProductsModule {}
