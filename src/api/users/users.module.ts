import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserProvider } from "./user.provider";

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...UserProvider]
})
export class UsersModule {
}
