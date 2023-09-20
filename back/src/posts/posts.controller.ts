import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { UserPostsDto } from './dtos/user-posts.dto';
import { AllPostsDto } from './dtos/all-posts.dto';

@Controller('posts')
export class PostsController {

    constructor(
        private postService: PostsService
    ){}

    @Post("/create-post")
    @UseGuards(AuthGuard)
    createPost(@Body() post:CreatePostDto){
        return this.postService.createPost(post);
    }

    @Post("/user-posts")
    @UseGuards(AuthGuard)
    findUserPosts(@Body() userPostsDto:UserPostsDto){
        return this.postService.findUserPosts(userPostsDto);
    }

    @Get("/all-posts")
    @UseGuards(AuthGuard)
    findAllPosts(){
        return this.postService.findAllPosts();
    }

    @Post("/all-posts")
    @UseGuards(AuthGuard)
    findPosts(@Body() allPostsDto:AllPostsDto){
        return this.postService.findPosts(allPostsDto);
    }
}
