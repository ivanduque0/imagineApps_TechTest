import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { User } from "src/schemas/users.schema";
import { createdByDto } from "./createdby.dto";

export class UserPostsDto {

  @IsNotEmpty()
  createdBy: createdByDto;
  
  @IsString()
  date: string;
}