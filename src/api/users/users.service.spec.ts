import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { getModelToken } from "@nestjs/sequelize";
import { User } from "./entities/user.entity";

describe("UsersService", () => {
  let service: UsersService;
  let users = [];
  const mockUsersProvider = {
    create: jest.fn().mockImplementation((dto) => {
      const newUser = {
        id: Date.now(),
        ...dto
      };
      users = [...users, newUser];
      return Promise.resolve({
        id: Date.now(),
        ...dto
      });
    }),
    findByPk: jest.fn().mockImplementation((id) => {
      return Promise.resolve(users.find(user => user.id == id));
    })
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User),
          useValue: mockUsersProvider
        }
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it("should create a new user record and return that", async () => {
    const dto = {
      name: "Miguel", lastName: "Morales", secondLastName: "Reyes", email: "cacahuatisimo13@gmail.com", password: "admin123"
    };
    expect(await service.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto
    });
  });
});
