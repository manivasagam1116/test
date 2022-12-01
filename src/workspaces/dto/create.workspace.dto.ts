import { IsString,IsDate,IsNotEmpty,IsOptional} from 'class-validator';

export class CreateRequestDto {
  
    @IsString()
    @IsNotEmpty()
    subscriptionItemId: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @IsNotEmpty()
    teamCollaborators: string;

}