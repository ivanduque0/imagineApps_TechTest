import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class User {
    @Prop({
        required:true,
        trim:true,
    })
    username: string;

    @Prop({
        required:true,
        trim:true
    })
    password: string;
    
    @Prop({
        required:true,
        trim:true,
        unique:true
    })
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);