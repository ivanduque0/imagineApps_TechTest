import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ArgumentsHost, Catch, ConflictException, ExceptionFilter } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { RegisterUserDto } from './dtos/register-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ){}

    @Post("/login")
    login(@Body() user:LoginUserDto){
        return this.authService.login(user);
    }

    @Get("/logout")
    logout(){
        return "logout"
    }

    @Post("/register")
    async register(@Body() newUser:RegisterUserDto){
        try {
            return await this.authService.register(newUser);  
        } catch (error) {
            if (error.code===11000) {
                throw new ConflictException("The email is already being used")
            }
            throw error;
        }
          
    }
}
