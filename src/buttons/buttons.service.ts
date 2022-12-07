import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Buttons } from './buttons.schema'; 
import { MongoRepository } from './repository/buttons.mongo.repository'; 
import { CreateRequestDto } from './dto/create.buttons.dto'; 

@Injectable()
export class ButtonsService {
   
    constructor(@InjectModel(Buttons.name) private ButtonsRepository: MongoRepository) { }

    async createUser(createButtonsDto: CreateRequestDto): Promise<Buttons> {
        return this.ButtonsRepository.create(createButtonsDto);
    }
    async readAll(): Promise<Buttons[]> {
        return this.ButtonsRepository.find({});
    }

    async GetreadById(id): Promise<Buttons> {
        return this.ButtonsRepository.findById(id);
    }

    async updateById(id, Buttons: Buttons): Promise<Buttons> {
        return this.ButtonsRepository.findByIdAndUpdate(id, Buttons)
    }

    async deleteById(id): Promise<any> {
        return this.ButtonsRepository.findByIdAndDelete(id);
    }
}
