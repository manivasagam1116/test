import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Textareas } from './textareas.schema'; 
import { MongoRepository } from './repository/textareas.mongo.repository'; 
import { CreateRequestDto } from './dto/create.textareas.dto'; 

@Injectable()
export class TextareasService {
   
    constructor(@InjectModel(Textareas.name) private TextareasRepository: MongoRepository) { }

    async createUser(createTextareasDto: CreateRequestDto): Promise<Textareas> {
        return this.TextareasRepository.create(createTextareasDto);
    }
    async readAll(): Promise<Textareas[]> {
        return this.TextareasRepository.find({});
    }

    async GetreadById(id): Promise<Textareas> {
        return this.TextareasRepository.findById(id);
    }

    async updateById(id, Textareas: Textareas): Promise<Textareas> {
        return this.TextareasRepository.findByIdAndUpdate(id, Textareas)
    }

    async deleteById(id): Promise<any> {
        return this.TextareasRepository.findByIdAndDelete(id);
    }
}
