import {Inject, Injectable} from "@nestjs/common";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {User} from "./entities/user.entity";
import {getModelToken} from "@nestjs/sequelize";
import {SequelizeCrudService} from "../crud/sequelize-crud-service";

@Injectable()
export class UsersService extends SequelizeCrudService<User, CreateUserDto, UpdateUserDto> {
    attributesUser: Array<keyof User> = ["id", "lastName", "name", "secondLastName", "email", "active", "createdAt", "updatedAt"];

    constructor(@Inject(getModelToken(User)) private readonly userProvider: typeof User) {
        super(userProvider);
    }

    async findAll(): Promise<User[]> {
        return super.findAll({attributes: this.attributesUser});
    }

    async findOne(id: number): Promise<User> {
        return super.findOne(id, {attributes: this.attributesUser});
    }


    async create(itemCreate: CreateUserDto): Promise<User> {
        const user = await super.create(itemCreate);
        return this.findOne(user.id);
    }
}
