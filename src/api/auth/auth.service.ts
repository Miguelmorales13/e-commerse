import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { getModelToken } from "@nestjs/sequelize";
import { User } from "../users/entities/user.entity";
import { SignInDto } from "./dto/sign-in.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @Inject(getModelToken(User)) private readonly userProvider: typeof User,
    private readonly jwtService: JwtService
  ) {
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userProvider.findOne({ where: { email } });
  }

  async signIn(signIn: SignInDto) {
    const userExsitent = await this.findOneByEmail(signIn.user);
    if (!userExsitent) {
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }
    if (!(await userExsitent.comparePassword(signIn.password))) {
      throw new HttpException("password or user invalid", HttpStatus.UNAUTHORIZED);
    }
    if (!userExsitent.active) {
      throw new HttpException("User with unauthorized, check with the adminstrator your status", HttpStatus.UNAUTHORIZED);
    }

    const userSuccess = {
      id: userExsitent.id,
      active: userExsitent.active,
      email: userExsitent.email,
      name: userExsitent.name,
      lastName: userExsitent.lastName,
      secondLastName: userExsitent.secondLastName,
      updatedAt: userExsitent.updatedAt,
      createdAt: userExsitent.createdAt
    };

    const token = await this.jwtService.sign({
      data: userSuccess,
      iss: "/auth/sign-in"
    });

    return {
      token,
      user: userSuccess
    };
  }


}
