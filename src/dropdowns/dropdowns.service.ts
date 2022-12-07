import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { MongoRepository } from './repository/dropdowns.mongo.repository'; 
import { CreateRequestDto } from './dto/create.dropdowns.dto'; 
import { Dropdowns } from './dropdowns.schema';

@Injectable()
export class DropdownsService {
   
    constructor(@InjectModel(Dropdowns.name) private DropdownsRepository: MongoRepository) { }

    async createUser(createUsersDto: CreateRequestDto): Promise<Dropdowns> {
        return this.DropdownsRepository.create(createUsersDto);
    }
    async readAll(): Promise<Dropdowns[]> {
        return this.DropdownsRepository.find({});
    }

    async GetreadById(id): Promise<Dropdowns> {
        return this.DropdownsRepository.findById(id);
    }

    async updateById(id, Dropdowns: Dropdowns): Promise<Dropdowns> {
        return this.DropdownsRepository.findByIdAndUpdate(id, Dropdowns)
    }

    async deleteById(id): Promise<any> {
        return this.DropdownsRepository.findByIdAndDelete(id);
    }
}
