import { IsString,IsDate,IsNotEmpty,IsOptional,IsEnum } from 'class-validator';

enum gender{
    male="male",
    female="female",
    others="others",
 } 

export class CreateRequestDto {
  
    
    @IsString()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(gender)
    sex: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsDate()
    @IsOptional()
    createDate: Date;

    @IsDate()
    @IsOptional()
    updatedDate: Date;

    @IsDate()
    @IsOptional()
    lastLogin: Date;

    @IsString()
    @IsOptional()
    hashRefreshToken: string;

    @IsString()
    @IsOptional()
    workspaces:[
        {
          _id:string;
          name:string;
        }
      ]
}
// export class CreateResponseDto{
//             status: string;
//             statuscode: number;
//             message: string;
//             result: string;
// }


