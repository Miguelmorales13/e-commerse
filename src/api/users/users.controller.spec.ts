import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UserProvider } from "./user.provider";

describe("UsersController", () => {
  let controller: UsersController;
  const mockUsersService = {
    create: jest.fn(dto => {
      return {
        id: Date.now(),
        ...dto
      };
    }),
    update: jest.fn().mockImplementation((id, dto) => {
      return {
        id,
        ...dto
      };
    })
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, ...UserProvider]
    }).overrideProvider(UsersService).useValue(mockUsersService).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
  it("should create user", () => {
    const dto = {
      name: "Miguel", lastName: "Morales", secondLastName: "Reyes", email: "cacahuatisimo13@gmail.com", password: "admin123"
    };
    expect(controller.create(dto))
      .toEqual({
        id: expect.any(Number),
        ...dto
      });
    expect(mockUsersService.create).toHaveBeenCalled();
  });
  it("should update user", () => {
    const dto = {
      name: "Miguel", lastName: "Morales", secondLastName: "Reyes", email: "cacahuatisimo13@gmail.com", password: "admin123"
    };
    expect(controller.update("1", dto)).toEqual({
      id: 1,
      ...dto
    });
    expect(mockUsersService.update).toHaveBeenCalled();
  });
  it("should find all users", () => {
  });
  it("should find one user", () => {
  });

});
