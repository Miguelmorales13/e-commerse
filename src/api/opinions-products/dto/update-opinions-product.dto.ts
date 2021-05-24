import { PartialType } from '@nestjs/mapped-types';
import { CreateOpinionsProductDto } from './create-opinions-product.dto';

export class UpdateOpinionsProductDto extends PartialType(CreateOpinionsProductDto) {}
