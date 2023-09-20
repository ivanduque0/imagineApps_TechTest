import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/post.schema';
import { CreatePostDto } from './dtos/create-post.dto';
import { UserPostsDto } from './dtos/user-posts.dto';
import { createdByDto } from './dtos/createdby.dto';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel(Post.name)
        private readonly postModel: Model<Post>,
        private readonly jwtService: JwtService
    ){}

    async findAllPosts(){
        return await this.postModel.find().sort({createdAt: -1});
    }

    async findPosts({word, date}){
        if (word && date) {
            let dateFrom = new Date(date);
            let dateTo = new Date(date);
            dateTo.setDate(dateFrom.getDate() + 1);
            return await this.postModel.find(
                {
                    createdAt:  { $gte: dateFrom , $lt: dateTo},
                    $or: [
                        {
                            title: { 
                                // $elemMatch :{
                                    // $in: "second " 
                                // },
                                $regex: word, $options: "i" 
                            }
                        }, 
                        {
                            content:{
                                // $elemMatch :{
                                    // $in: "second " 
                                // },
                                $regex: word, $options: "i" 
                            }
                        },
                    ],
                    
                }
            )
        }
        if (!word && date) {
            let dateFrom = new Date(date);
            let dateTo = new Date(date);
            dateTo.setDate(dateFrom.getDate() + 1);
            return await this.postModel.find(      
                {
                    createdAt:  { $gte: dateFrom , $lt: dateTo}
                },
                    
            )
        }
        if (word && !date) {
            return await this.postModel.find(
                {
                    $or: [
                        {
                            title: { 
                                // $elemMatch :{
                                    // $in: "second " 
                                // },
                                $regex: word, $options: "i" 
                            }
                        }, 
                        {
                            content:{
                                // $elemMatch :{
                                    // $in: "second " 
                                // },
                                $regex: word, $options: "i" 
                            }
                        }

                    ]
                }
            ).sort({createdAt: -1})
        }
        return await this.findAllPosts();
    }

    async findAllUserPosts(createdBy: createdByDto){
        return await this.postModel.find(
            {
                'createdBy': createdBy
            }
        ).sort({createdAt: -1});
    }

    async findUserPosts({createdBy, date}){
        if (createdBy && !date) {
            return await this.postModel.find(
                {
                    'createdBy': createdBy
                }
            ).sort({createdAt: -1});
        }
        if (createdBy && date) {
            let dateFrom = new Date(date);
            let dateTo = new Date(date);
            dateTo.setDate(dateFrom.getDate() + 1);
            return await this.postModel.find(
                {
                    'createdBy': createdBy,
                    'createdAt':  { $gte: dateFrom , $lt: dateTo}
                },
            ).sort({createdAt: -1});
        }
        return []
        
    }

    async createPost(createPostDto: CreatePostDto){
        const newPost = await new this.postModel(createPostDto);
        return newPost.save();
    }

}
