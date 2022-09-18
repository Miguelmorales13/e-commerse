import {MockModel} from "./mock.model";
import {User} from "../../entities/user.entity";
import {UserStub} from "./user.stub";

export class UserModel extends MockModel<User> {
    protected entityStub = UserStub();

}
