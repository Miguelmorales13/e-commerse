import { Injectable } from '@nestjs/common';
import { CreateImagesProductDto } from './dto/create-images-product.dto';
import { UpdateImagesProductDto } from './dto/update-images-product.dto';

@Injectable()
export class ImagesProductsService {
  create(createImagesProductDto: CreateImagesProductDto) {
    return 'This action adds a new imagesProduct';
  }

  findAll() {
    return `This action returns all imagesProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagesProduct`;
  }

  update(id: number, updateImagesProductDto: UpdateImagesProductDto) {
    return `This action updates a #${id} imagesProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagesProduct`;
  }
}
