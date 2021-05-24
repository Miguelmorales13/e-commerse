import { Injectable } from '@nestjs/common';
import { CreateOpinionsProductDto } from './dto/create-opinions-product.dto';
import { UpdateOpinionsProductDto } from './dto/update-opinions-product.dto';

@Injectable()
export class OpinionsProductsService {
  create(createOpinionsProductDto: CreateOpinionsProductDto) {
    return 'This action adds a new opinionsProduct';
  }

  findAll() {
    return `This action returns all opinionsProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opinionsProduct`;
  }

  update(id: number, updateOpinionsProductDto: UpdateOpinionsProductDto) {
    return `This action updates a #${id} opinionsProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} opinionsProduct`;
  }
}
