import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Checkboxes } from './checkboxes.schema'; 
import { MongoRepository } from './repository/checkboxes.mongo.repository'; 
import { CreateRequestDto } from './dto/create.checkbox.dto'; 

@Injectable()
export class CheckboxesService {
   
    constructor(@InjectModel(Checkboxes.name) private CheckboxesRepository: MongoRepository) { }

    async createUser(createCheckboxesDto: CreateRequestDto): Promise<Checkboxes> {
        return this.CheckboxesRepository.create(createCheckboxesDto);
    }
    async readAll(): Promise<Checkboxes[]> {
        return this.CheckboxesRepository.find({});
    }

    async GetreadById(id): Promise<Checkboxes> {
        return this.CheckboxesRepository.findById(id);
    }

    async updateById(id, Checkboxes: Checkboxes): Promise<Checkboxes> {
        return this.CheckboxesRepository.findByIdAndUpdate(id, Checkboxes)
    }

    async deleteById(id): Promise<any> {
        return this.CheckboxesRepository.findByIdAndDelete(id);
    }
}
