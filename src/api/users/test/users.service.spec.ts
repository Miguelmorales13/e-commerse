import {Test, TestingModule} from "@nestjs/testing";
import {UsersService} from "../users.service";
import {getModelToken} from "@nestjs/sequelize";
import {User} from "../entities/user.entity";
import {DestroyOptions, FindOptions, UpdateOptions, ValidationErrorItem} from "sequelize";
import {UserStub} from "./helpers/user.stub";
import {UserModel} from "./helpers/user.model";
import {SequelizeException} from "../../../exceptions/sequelize.exception";

describe("UsersService", () => {
    let service: UsersService;
    let userFilterQuery: FindOptions<User>;
    let userOptionsDestroy: DestroyOptions<User>;
    let userOptionsUpdate: UpdateOptions<User>;
    let userModel: UserModel
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: getModelToken(User),
                    useValue: new UserModel(UserStub())

                }
            ]
        }).compile();
        service = module.get<UsersService>(UsersService);
        userModel = module.get<UserModel>(getModelToken(User));
        userFilterQuery = {
            attributes: ["id", "lastName", "name", "secondLastName", "email", "active", "createdAt", "updatedAt"]
        }
        userOptionsDestroy = {where: {id: +UserStub().id}, limit: 1}
        userOptionsUpdate = {where: {id: +UserStub().id}, limit: 1}
        jest.clearAllMocks()
    });
    it('usersService should be defined', () => {
        expect(service).toBeDefined();
    });

    describe("getAll", () => {
        describe("when getAll is called", () => {
            let users: User[]
            beforeEach(async () => {
                jest.spyOn(userModel, "findAll")
                users = await service.findAll();
            })

            test("then it should is call userModel.findAll", () => {
                expect(userModel.findAll).toHaveBeenCalledWith(userFilterQuery)
            })
            test("then it should a return users", () => {
                expect(users).toEqual([UserStub()])
            })
        })
    })
    describe("getOne", () => {
        describe("when getOne is called", () => {
            let user: User
            beforeEach(async () => {
                jest.spyOn(userModel, "findByPk")
                user = await service.findOne(+UserStub().id);
            })
            test("then it should is call userModel.findByPk", () => {
                expect(userModel.findByPk).toHaveBeenCalledWith(+UserStub().id, userFilterQuery)
            })
            test("then it should a return user", () => {
                expect(user).toEqual(UserStub())
            })
        })
    })
    describe("create", () => {
        describe("when create is called", () => {
            let user: User
            beforeEach(async () => {
                jest.spyOn(userModel, "create")
                user = await service.create(UserStub());
            })
            test("then it should call a userModel.create", () => {
                expect(userModel.create).toHaveBeenCalledWith(UserStub())
            })
            test("then it should a return user", () => {
                expect(user).toEqual(UserStub())
            })
        })
        describe("when create is failed", () => {
            beforeEach(async () => {
                jest.spyOn(userModel, "create").mockImplementation((): Promise<any> => {
                        throw new SequelizeException([new ValidationErrorItem("error")])
                    }
                )
            })
            test("then it should a SequelizeException", async () => {
                await expect(service.create({})).rejects.toThrow()
            })
        })
    })
    describe("update", () => {
        describe("when update is called", () => {
            let user: User
            beforeEach(async () => {
                jest.spyOn(userModel, "update")
                user = await service.update(+UserStub().id, UserStub());
            })
            test("then it should call a userModel.create", () => {
                expect(userModel.update).toHaveBeenCalledWith(UserStub(), userOptionsUpdate)
            })
            test("then it should a return user", () => {
                expect(user).toEqual(UserStub())
            })
        })
        describe("when update is failed", () => {
            beforeEach(async () => {
                jest.spyOn(userModel, "update").mockImplementation((): Promise<any> => {
                        throw new SequelizeException([new ValidationErrorItem("error")])
                    }
                )
            })
            test("then it should a SequelizeException", async () => {
                await expect(service.update(UserStub().id, {})).rejects.toThrow()
            })
        })
    })
    describe("remove", () => {
        describe("when remove is called", () => {
            let numberDeleted: number
            beforeEach(async () => {
                jest.spyOn(userModel, "destroy")
                numberDeleted = await service.remove(+UserStub().id);
            })
            test("then it should call a userModel.destroy", () => {
                expect(userModel.destroy).toHaveBeenCalledWith(userOptionsDestroy)
            })
            test("then it should a return user", () => {
                expect(numberDeleted).toEqual(1)
            })
        })
    })
});
