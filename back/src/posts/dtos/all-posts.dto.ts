import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { User } from "src/schemas/users.schema";

export class AllPostsDto {

  @IsString()
  word: string;
  
  @IsString()
  date: string;
}