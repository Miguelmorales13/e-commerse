import { PartialType } from '@nestjs/mapped-types';
import { CreateClientsAddressDto } from './create-clients-address.dto';

export class UpdateClientsAddressDto extends PartialType(CreateClientsAddressDto) {}
