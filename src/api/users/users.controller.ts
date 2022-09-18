import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller("users")
@ApiTags("users")
// @ApiBearerAuth()
// @UseGuards(AuthGuard("jwt"))
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    @ApiOperation({summary: "This endpoint is for creating of a user"})
    @ApiCreatedResponse({description: "the user was created successful"})
    @ApiBadRequestResponse({description: "the user wasn't created because some field was not correct "})
    @ApiConflictResponse({description: "the user wasn't created because this usr already exist"})
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @ApiOperation({summary: "This endpoint is for getting all users"})
    @ApiOkResponse({description: "users wanted"})
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(":id")
    @ApiOperation({summary: "This endpoint is for getting a user by id"})
    async findOne(@Param("id") id: string) {
        return this.usersService.findOne(+id);
    }

    @Patch(":id")
    @ApiOperation({summary: "This endpoint is for update a user by id"})
    @ApiOkResponse({description: "the user was updated successful"})
    @ApiBadRequestResponse({description: "the user wasn't updated because some field was not correct "})
    async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(":id")
    @ApiOperation({summary: "This endpoint is for deletion of a user by id"})
    @ApiOkResponse({description: "the user was deleted successful"})
    async remove(@Param("id") id: string) {
        return this.usersService.remove(+id);
    }
}
