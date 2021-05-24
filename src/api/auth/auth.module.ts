import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserProvider } from "../users/user.provider";
import { JwtStrategy } from "./jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { GetEnv } from "../../configs/env.validations";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: GetEnv('SECRET_TOKEN'),
        signOptions: {
          expiresIn: "1d"
        }
      })
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [AuthService, JwtStrategy, ...UserProvider]
})
export class AuthModule {
}
