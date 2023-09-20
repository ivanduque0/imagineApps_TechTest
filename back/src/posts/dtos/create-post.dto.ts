import { IsNotEmpty, IsString, MaxLength, MinLength, maxLength } from "class-validator";
import { createdBy } from "src/schemas/post.schema";
import { User } from "src/schemas/users.schema";

export class CreatePostDto {

  @IsString()
  @IsNotEmpty()
  title: string;
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(300, {
    message: "Content can have up to 300 characters"
  })
  content: string;
  
  // @IsNotEmpty()
  // user: User;
  @IsNotEmpty()
  createdBy: createdBy;
}