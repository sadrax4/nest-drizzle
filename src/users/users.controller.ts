import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post()
    createUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.usersService.createUser(
            createUserDto
        );
    }

}
