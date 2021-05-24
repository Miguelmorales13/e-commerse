import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabasesModule } from "./databases/databases.module";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ValidationPipe } from "./pipes/validation.pipe";
import { ResponseInterceptor } from "./interceptors/response.interceptor";
import { ApiModule } from "./api/api.module";
import { ConfigModule } from "@nestjs/config";
import { validate } from "./configs/env.validations";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ApiModule, DatabasesModule, ConfigModule.forRoot({ validate })],
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: APP_PIPE,
          useClass: ValidationPipe
        },
        {
          provide: APP_INTERCEPTOR,
          useClass: ResponseInterceptor
        }
      ]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it("should be define", () => {
      expect(appController).toBeDefined();
    });
    it("should return \"Hello World!\"", () => {
      console.log(appController.getHello());
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
