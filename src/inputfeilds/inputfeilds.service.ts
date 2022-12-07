import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Inputfeilds } from './inputfeilds.schema'; 
import { MongoRepository } from './repository/inputfeilds.mongo.repository';
import { CreateRequestDto } from './dto/create.inputfeilds.dto';

@Injectable()
export class InputfeildsService {
   
    constructor(@InjectModel(Inputfeilds.name) private InputfeildsRepository: MongoRepository) { }

    async createUser(createInputfeildsDto: CreateRequestDto): Promise<Inputfeilds> {
        return this.InputfeildsRepository.create(createInputfeildsDto);
    }
    async readAll(): Promise<Inputfeilds[]> {
        return this.InputfeildsRepository.find({});
    }

    async GetreadById(id): Promise<Inputfeilds> {
        return this.InputfeildsRepository.findById(id);
    }

    async updateById(id, Inputfeilds: Inputfeilds): Promise<Inputfeilds> {
        return this.InputfeildsRepository.findByIdAndUpdate(id, Inputfeilds)
    }

    async deleteById(id): Promise<any> {
        return this.InputfeildsRepository.findByIdAndDelete(id);
    }
}
