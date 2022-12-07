import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Radiobuttons } from './radiobuttons.schema'; 
import { MongoRepository } from './repository/radiobuttons.mongo.repository'; 
import { CreateRequestDto } from './dto/create.radiobuttons.dto'; 

@Injectable()
export class RadiobuttonsService {
   
    constructor(@InjectModel(Radiobuttons.name) private RadiobuttonsRepository: MongoRepository) { }

    async createUser(createUsersDto: CreateRequestDto): Promise<Radiobuttons> {
        return this.RadiobuttonsRepository.create(createUsersDto);
    }
    async readAll(): Promise<Radiobuttons[]> {
        return this.RadiobuttonsRepository.find({});
    }

    async GetreadById(id): Promise<Radiobuttons> {
        return this.RadiobuttonsRepository.findById(id);
    }

    async updateById(id, Radiobuttons: Radiobuttons): Promise<Radiobuttons> {
        return this.RadiobuttonsRepository.findByIdAndUpdate(id, Radiobuttons)
    }

    async deleteById(id): Promise<any> {
        return this.RadiobuttonsRepository.findByIdAndDelete(id);
    }
}
