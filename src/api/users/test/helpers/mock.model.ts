import {DestroyOptions, FindOptions, UpdateOptions} from "sequelize";

export class MockModel<T> {
    protected entityStub: T;


    constructor(entityStub: T) {
        this.entityStub = entityStub;
    }

    async create(item: T): Promise<T> {
        return this.entityStub;
    }

    async findAll(options?: FindOptions): Promise<T[]> {
        return [this.entityStub];
    }

    async findByPk(pk: any, options?: FindOptions): Promise<T> {
        return this.entityStub;
    }

    async destroy(options: DestroyOptions): Promise<number> {
        return 1;
    }

    async update(item?: T, options?: UpdateOptions): Promise<T> {
        return this.entityStub;
    }

}
