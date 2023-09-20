import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from 'src/auth/dtos/register-user.dto';
import { User } from 'src/schemas/users.schema';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
        private readonly jwtService: JwtService
    ){}

    async create(createUserDto: RegisterUserDto){
        const newUser = await new this.userModel(createUserDto);
        return newUser.save();
    }

    async findByEmail(email: string){
        return await this.userModel.find(
            {
                'email': email
            }
        );
    }


}
