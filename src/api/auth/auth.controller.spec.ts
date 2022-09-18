import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { GetEnv } from "../../configs/env.validations";
import { AuthService } from "./auth.service";
import { getModelToken } from "@nestjs/sequelize";
import { User } from "../users/entities/user.entity";
import { JwtStrategy } from "./jwt.strategy";

describe("AuthController", () => {
  let controller: AuthController;
  const mockUserProvider = {};
  const mockAuthService = {};
  const mockJwtService = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        JwtModule.registerAsync({
          useFactory: () => ({
            secret: "test",
            signOptions: {
              expiresIn: "1d"
            }
          })
        })
      ],
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy, { provide: getModelToken(User), useValue: mockUserProvider }]
    }).overrideProvider(AuthService).useValue(mockAuthService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
