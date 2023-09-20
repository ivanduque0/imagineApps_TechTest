import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "./users.schema";

@Schema({
    timestamps: false,
    _id:false
})
export class createdBy {
    @Prop({
        required:true,
        trim:true,
    })
    email: string;
    
    @Prop({
        required:true,
        trim:true
    })
    username: string;
}

const CreatedBySchema = SchemaFactory.createForClass(createdBy);

@Schema({
    timestamps: true
})
export class Post {
    @Prop({
        required:true,
        trim:true,
    })
    title: string;
    
    @Prop({
        required:true,
        trim:true
    })
    content: string;
    
    // @Prop({
    //     required:false,
    //     type: Types.ObjectId,
    //     ref: 'user'
    // })
    // user?: User;
    @Prop({
        required:true,
        trim:true,
        type: CreatedBySchema
    })
    createdBy: createdBy;
}

export const PostSchema = SchemaFactory.createForClass(Post);