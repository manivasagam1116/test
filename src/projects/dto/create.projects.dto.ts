import { IsString,IsDate,IsNotEmpty,IsOptional } from 'class-validator';

export class CreateRequestDto {
  
    
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
   slug: string;

    @IsString()
    @IsNotEmpty()
    accessType: string;

    @IsString()
    @IsOptional()
    socialImage: "null";

    @IsString()
    @IsOptional()
    deploymentType: "AWS";

    @IsString()
    @IsOptional()
    deploymentId: string;

    @IsString()
    @IsOptional()
    domain: "null";
}



