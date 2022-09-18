import {UserStub} from "../test/helpers/user.stub";

export const UsersService = jest.fn().mockReturnValue(
    {
        findAll: jest.fn().mockResolvedValue([UserStub()]),
        findOne: jest.fn().mockResolvedValue(UserStub()),
        create: jest.fn().mockResolvedValue(UserStub()),
        update: jest.fn().mockReturnValue(UserStub()),
        remove: jest.fn().mockReturnValue(1),
    }
)
