import { User } from "../../src/api/users/entities/user.entity";

export const initialUsers: User[] = [
  {
    name: "miguel",
    lastName: "morales",
    secondLastName: "reyes",
    password: "admin123",
    email: "cacahuatisimo13@gmail.com"
  }, {
    name: "miguel",
    lastName: "morales",
    secondLastName: "reyes",
    password: "admin123",
    email: "cacahuatisimo13+1@gmail.com"
  }
] as User[];
export const [firstUser, secondUser] = initialUsers;