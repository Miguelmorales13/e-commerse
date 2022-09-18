import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { ApiCreatedResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@Controller("auth")
@ApiTags("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("sign-in")
  @ApiOperation({ summary: "this endpoint is for sign in" })
  @ApiUnauthorizedResponse({ description: "if you don't have user or password or your credentials are wrong" })
  @ApiCreatedResponse({ description: "successfully login" })
  async signIn(@Body() signIn: SignInDto) {
    const data = await this.authService.signIn(signIn);
    return {
      data,
      message: "thanks for back the platform, login has success"
    };
  }
}
