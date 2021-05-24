import { Module } from '@nestjs/common';
import { OpinionsProductsService } from './opinions-products.service';
import { OpinionsProductsController } from './opinions-products.controller';

@Module({
  controllers: [OpinionsProductsController],
  providers: [OpinionsProductsService]
})
export class OpinionsProductsModule {}
