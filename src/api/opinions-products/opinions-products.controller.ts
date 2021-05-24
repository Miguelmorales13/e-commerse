import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpinionsProductsService } from './opinions-products.service';
import { CreateOpinionsProductDto } from './dto/create-opinions-product.dto';
import { UpdateOpinionsProductDto } from './dto/update-opinions-product.dto';

@Controller('opinions-products')
export class OpinionsProductsController {
  constructor(private readonly opinionsProductsService: OpinionsProductsService) {}

  @Post()
  create(@Body() createOpinionsProductDto: CreateOpinionsProductDto) {
    return this.opinionsProductsService.create(createOpinionsProductDto);
  }

  @Get()
  findAll() {
    return this.opinionsProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opinionsProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpinionsProductDto: UpdateOpinionsProductDto) {
    return this.opinionsProductsService.update(+id, updateOpinionsProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opinionsProductsService.remove(+id);
  }
}
