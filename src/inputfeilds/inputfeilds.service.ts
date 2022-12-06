import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Inputfeilds } from './inputfeilds.schema'; 
import { MongoRepository } from './repository/inputfeilds.mongo.repository';
import { CreateRequestDto } from './dto/create.inputfeilds.dto';

@Injectable()
export class InputfeildsService {
   
    constructor(@InjectModel(Inputfeilds.name) private UsersRepository: MongoRepository) { }

    async createUser(createUsersDto: CreateRequestDto): Promise<Inputfeilds> {
        return this.UsersRepository.create(createUsersDto);
    }
    async readAll(): Promise<Inputfeilds[]> {
        return this.UsersRepository.find({});
    }

    async GetreadById(id): Promise<Inputfeilds> {
        return this.UsersRepository.findById(id);
    }

    async updateById(id, Inputfeilds: Inputfeilds): Promise<Inputfeilds> {
        return this.UsersRepository.findByIdAndUpdate(id, Inputfeilds)
    }

    async deleteById(id): Promise<any> {
        return this.UsersRepository.findByIdAndDelete(id);
    }
}
