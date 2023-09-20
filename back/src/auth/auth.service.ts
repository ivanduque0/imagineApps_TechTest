import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dtos/register-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async register(newUser:RegisterUserDto){
        newUser['password']= await await bcrypt.hash(newUser['password'], 10);
        return this.userService.create(newUser)
    }

    async login({email, password}:LoginUserDto){
        const user = await this.userService.findByEmail(email) 
        if(!user.length) throw new UnauthorizedException('Email or Password is wrong');
        
        const isPasswordValid = await bcrypt.compare(password, user[0].password)

        if(!isPasswordValid) throw new UnauthorizedException('Email or Password is wrong');

        const payload = { email: user[0].email}

        const token = await this.jwtService.signAsync(payload);
        return {
            token:token,
            user: user[0]
        }
    }

}
