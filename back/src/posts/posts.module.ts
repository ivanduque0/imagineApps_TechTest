import { Module, forwardRef } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schemas/post.schema';

@Module({
  imports: [
    forwardRef(() => PostsModule),
    MongooseModule.forFeature([
      { name:Post.name,
        schema:PostSchema
      }
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
