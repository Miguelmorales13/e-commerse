import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("sign-in")
  async signIn(@Body() signIn: SignInDto) {
    const data = await this.authService.signIn(signIn);
    return {
      data,
      message: "thanks for back the platform, login has success"
    };
  }
}
