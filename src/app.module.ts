import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApiModule } from "./api/api.module";
import { DatabasesModule } from "./databases/databases.module";
import { ConfigModule } from "@nestjs/config";
import { validate } from "./configs/env.validations";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ResponseInterceptor } from "./interceptors/response.interceptor";
import { ValidationPipe } from "./pipes/validation.pipe";

@Module({
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
})
export class AppModule {
}
