import { Inject, Injectable } from "@nestjs/common";
import { CreateImagesProductDto } from "./dto/create-images-product.dto";
import { UpdateImagesProductDto } from "./dto/update-images-product.dto";
import { SequelizeCrudService } from "../crud/sequelize-crud-service";
import { ImagesProduct } from "./entities/images-product.entity";
import { getModelToken } from "@nestjs/sequelize";

@Injectable()
export class ImagesProductsService extends SequelizeCrudService<ImagesProduct, CreateImagesProductDto, UpdateImagesProductDto> {
  constructor(@Inject(getModelToken(ImagesProduct)) private readonly imagesProductProvider: typeof ImagesProduct) {
    super(imagesProductProvider);
  }

}
