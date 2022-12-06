import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { MongoRepository } from './repository/dropdowns.mongo.repository'; 
import { CreateRequestDto } from './dto/create.dropdowns.dto'; 
import { Dropdowns } from './dropdowns.schema';

@Injectable()
export class DropdownsService {
   
    constructor(@InjectModel(Dropdowns.name) private UsersRepository: MongoRepository) { }

    async createUser(createUsersDto: CreateRequestDto): Promise<Dropdowns> {
        return this.UsersRepository.create(createUsersDto);
    }
    async readAll(): Promise<Dropdowns[]> {
        return this.UsersRepository.find({});
    }

    async GetreadById(id): Promise<Dropdowns> {
        return this.UsersRepository.findById(id);
    }

    async updateById(id, Dropdowns: Dropdowns): Promise<Dropdowns> {
        return this.UsersRepository.findByIdAndUpdate(id, Dropdowns)
    }

    async deleteById(id): Promise<any> {
        return this.UsersRepository.findByIdAndDelete(id);
    }
}
