import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './buttons.repository.interface'; 
import { Buttons, ButtonsDocument } from '../buttons.schema';

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(Buttons.name) private ButtonsModel: Model<ButtonsDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<Buttons>): Promise<Buttons> {
        return this.ButtonsModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<Buttons>): Promise<Buttons[]> {
        return this.ButtonsModel.find(usersFilterQuery);
    }
    async create(Buttons: Buttons): Promise<Buttons> {
        const newUsers = new this.ButtonsModel(Buttons);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<Buttons>): Promise<Buttons> {
        return this.ButtonsModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<Buttons>, Buttons:Partial<Buttons>): Promise<Buttons> {
        return this.ButtonsModel.findByIdAndUpdate(usersFilterQuery, Buttons, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<Buttons>): Promise<Buttons> {
        return this.ButtonsModel.findByIdAndDelete(usersFilterQuery);
    }
}