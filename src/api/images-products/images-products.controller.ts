import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagesProductsService } from './images-products.service';
import { CreateImagesProductDto } from './dto/create-images-product.dto';
import { UpdateImagesProductDto } from './dto/update-images-product.dto';

@Controller('images-products')
export class ImagesProductsController {
  constructor(private readonly imagesProductsService: ImagesProductsService) {}

  @Post()
  create(@Body() createImagesProductDto: CreateImagesProductDto) {
    return this.imagesProductsService.create(createImagesProductDto);
  }

  @Get()
  findAll() {
    return this.imagesProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagesProductDto: UpdateImagesProductDto) {
    return this.imagesProductsService.update(+id, updateImagesProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesProductsService.remove(+id);
  }
}
