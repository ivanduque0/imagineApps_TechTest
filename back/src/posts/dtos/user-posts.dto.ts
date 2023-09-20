import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { User } from "src/schemas/users.schema";

export class UserPostsDto {

  @IsString()
  @IsNotEmpty()
  email: string;
  
  @IsString()
  date: string;
}