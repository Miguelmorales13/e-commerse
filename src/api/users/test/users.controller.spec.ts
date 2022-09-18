import {Test, TestingModule} from "@nestjs/testing";
import {UsersController} from "../users.controller";
import {UsersService} from "../users.service";
import {UserProvider} from "../user.provider";
import {UserStub} from "./helpers/user.stub";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";

jest.mock("../users.service")

describe("UsersController", () => {
    let controller: UsersController;
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService, ...UserProvider]
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get<UsersService>(UsersService);
        jest.clearAllMocks()
    });
    it('usersService should be defined', () => {
        expect(service).toBeDefined();
    });
    it('usersController should be defined', () => {
        expect(controller).toBeDefined();
    });
    describe("getOne", () => {
        describe("when getOne is called", () => {
            let user;
            beforeEach(async () => {
                user = await controller.findOne(UserStub().id)
            })

            test("when it should call userService", () => {
                expect(service.findOne).toBeCalledWith(+UserStub().id)
            })
            test("when it should return a user", () => {
                expect(user).toEqual(UserStub())
            })
        })
    })
    describe("getAll", () => {
        describe("when getAll is called", () => {
            let users;
            beforeEach(async () => {
                users = await controller.findAll()
            })

            test("when it should call userService", () => {
                expect(service.findAll).toHaveBeenCalled()
            })
            test("when it should return  users", () => {
                expect(users).toEqual([UserStub()])
            })
        })
    })

    describe("create", () => {
        describe("when create is called", () => {
            let user;
            const createUserDto: CreateUserDto = {
                name: "Miguel",
                lastName: "Morales",
                secondLastName: "Reyes",
                email: "cacahuatisimo13@gmail.com",
                password: "fldssfsadsa",
            };
            beforeEach(async () => {
                user = await controller.create(createUserDto)
            })

            test("when it should call userService", () => {
                expect(service.create).toHaveBeenCalledWith(createUserDto)
            })
            test("when it should call userService", () => {
                expect(user).toEqual(UserStub())
            })
        })
    })
    describe("update", () => {
        describe("when update is called", () => {
            let user;
            const updateUserDto: UpdateUserDto = {
                id: 121,
                name: "Miguel",
                lastName: "Morales",
                secondLastName: "Reyes",
                email: "cacahuatisimo13@gmail.com",
            };
            beforeEach(async () => {
                user = await controller.update(UserStub().id, updateUserDto)
            })

            test("when it should call userService", () => {
                expect(service.update).toHaveBeenCalledWith(+UserStub().id, updateUserDto)
            })
            test("when it should call userService", () => {
                expect(user).toEqual(UserStub())
            })
        })
    })
    describe("remove", () => {
        describe("when remove is called", () => {
            let user;
            beforeEach(async () => {
                user = await controller.remove(UserStub().id)
            })

            test("when it should call userService", () => {
                expect(service.remove).toHaveBeenCalledWith(+UserStub().id)
            })
            test("when it should call userService", () => {
                expect(user).toEqual(1)
            })
        })
    })


});
