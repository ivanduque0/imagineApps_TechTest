import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`,
    {
      dbName: process.env.MONGO_INITDB_DATABASE,
    }
    ),
    AuthModule, 
    UsersModule, 
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
