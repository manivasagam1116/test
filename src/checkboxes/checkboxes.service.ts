import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Checkboxes } from './checkboxes.schema'; 
import { MongoRepository } from './repository/checkboxes.mongo.repository'; 
import { CreateRequestDto } from './dto/create.checkbox.dto'; 

@Injectable()
export class CheckboxesService {
   
    constructor(@InjectModel(Checkboxes.name) private UsersRepository: MongoRepository) { }

    async createUser(createUsersDto: CreateRequestDto): Promise<Checkboxes> {
        return this.UsersRepository.create(createUsersDto);
    }
    async readAll(): Promise<Checkboxes[]> {
        return this.UsersRepository.find({});
    }

    async GetreadById(id): Promise<Checkboxes> {
        return this.UsersRepository.findById(id);
    }

    async updateById(id, Checkboxes: Checkboxes): Promise<Checkboxes> {
        return this.UsersRepository.findByIdAndUpdate(id, Checkboxes)
    }

    async deleteById(id): Promise<any> {
        return this.UsersRepository.findByIdAndDelete(id);
    }
}
