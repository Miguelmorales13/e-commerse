import { PartialType } from '@nestjs/mapped-types';
import { CreateImagesProductDto } from './create-images-product.dto';

export class UpdateImagesProductDto extends PartialType(CreateImagesProductDto) {}
