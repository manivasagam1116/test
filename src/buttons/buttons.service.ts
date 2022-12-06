import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Buttons } from './buttons.schema'; 
import { MongoRepository } from './repository/buttons.mongo.repository'; 
import { CreateRequestDto } from './dto/create.buttons.dto'; 

@Injectable()
export class ButtonsService {
   
    constructor(@InjectModel(Buttons.name) private UsersRepository: MongoRepository) { }

    async createUser(createUsersDto: CreateRequestDto): Promise<Buttons> {
        return this.UsersRepository.create(createUsersDto);
    }
    async readAll(): Promise<Buttons[]> {
        return this.UsersRepository.find({});
    }

    async GetreadById(id): Promise<Buttons> {
        return this.UsersRepository.findById(id);
    }

    async updateById(id, Buttons: Buttons): Promise<Buttons> {
        return this.UsersRepository.findByIdAndUpdate(id, Buttons)
    }

    async deleteById(id): Promise<any> {
        return this.UsersRepository.findByIdAndDelete(id);
    }
}
