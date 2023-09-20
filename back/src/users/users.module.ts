import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { User, UserSchema } from 'src/schemas/users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    MongooseModule.forFeature([
      { name:User.name,
        schema:UserSchema
      }
    ])
  ],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
