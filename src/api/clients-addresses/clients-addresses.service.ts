import { Injectable } from '@nestjs/common';
import { CreateClientsAddressDto } from './dto/create-clients-address.dto';
import { UpdateClientsAddressDto } from './dto/update-clients-address.dto';

@Injectable()
export class ClientsAddressesService {
  create(createClientsAddressDto: CreateClientsAddressDto) {
    return 'This action adds a new clientsAddress';
  }

  findAll() {
    return `This action returns all clientsAddresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientsAddress`;
  }

  update(id: number, updateClientsAddressDto: UpdateClientsAddressDto) {
    return `This action updates a #${id} clientsAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientsAddress`;
  }
}
