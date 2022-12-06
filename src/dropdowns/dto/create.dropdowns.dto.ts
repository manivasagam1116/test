import { IsString,IsNotEmpty,IsOptional, IsEnum} from 'class-validator';

enum type{
    number="number",
    text="text",  
 } 

export class CreateRequestDto {
  
    
    @IsString()
    @IsNotEmpty()
    id: "number";

    @IsString()
    @IsNotEmpty()
    name: "name";

    @IsString()
    @IsNotEmpty()
    placeholder:"placeholder";

    @IsString()
    @IsNotEmpty()
    @IsEnum(type)
    type:"type";

    @IsString()
    @IsNotEmpty()
    maxlength: "max";

    @IsString()
    @IsOptional()
    minlength: "min";

    @IsString()
    @IsOptional()
    class: "";

    @IsString()
    @IsOptional()
    pattern: "pattern";

    @IsString()
    @IsOptional()
    required: "required";

    @IsString()
    @IsOptional()
    value: "value";

}