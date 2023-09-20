import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { User } from "src/schemas/users.schema";

export class createdByDto {

  @IsString()
  email: string;
  
  @IsString()
  username: string;
}