import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './inputfeilds.repository.interface';
import { Inputfeilds, InputfeildsDocument } from '../inputfeilds.schema';

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(Inputfeilds.name) private InpitfeildsModel: Model<InputfeildsDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<Inputfeilds>): Promise<Inputfeilds> {
        return this.InpitfeildsModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<Inputfeilds>): Promise<Inputfeilds[]> {
        return this.InpitfeildsModel.find(usersFilterQuery);
    }
    async create(Inputfeilds: Inputfeilds): Promise<Inputfeilds> {
        const newUsers = new this.InpitfeildsModel(Inputfeilds);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<Inputfeilds>): Promise<Inputfeilds> {
        return this.InpitfeildsModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<Inputfeilds>, Inputfeilds:Partial<Inputfeilds>): Promise<Inputfeilds> {
        return this.InpitfeildsModel.findByIdAndUpdate(usersFilterQuery, Inputfeilds, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<Inputfeilds>): Promise<Inputfeilds> {
        return this.InpitfeildsModel.findByIdAndDelete(usersFilterQuery);
    }
}