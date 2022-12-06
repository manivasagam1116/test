import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './dropdowns.repository.interrface'; 
import { Dropdowns, DropdownsDocument } from '../dropdowns.schema';

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(Dropdowns.name) private DropdownsModel: Model<DropdownsDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<Dropdowns>): Promise<Dropdowns> {
        return this.DropdownsModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<Dropdowns>): Promise<Dropdowns[]> {
        return this.DropdownsModel.find(usersFilterQuery);
    }
    async create(Dropdowns: Dropdowns): Promise<Dropdowns> {
        const newUsers = new this.DropdownsModel(Dropdowns);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<Dropdowns>): Promise<Dropdowns> {
        return this.DropdownsModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<Dropdowns>, Dropdowns:Partial<Dropdowns>): Promise<Dropdowns> {
        return this.DropdownsModel.findByIdAndUpdate(usersFilterQuery, Dropdowns, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<Dropdowns>): Promise<Dropdowns> {
        return this.DropdownsModel.findByIdAndDelete(usersFilterQuery);
    }
}