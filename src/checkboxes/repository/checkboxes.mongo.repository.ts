import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './Checkboxes.repository.interface'; 
import { Checkboxes, CheckboxesDocument } from '../Checkboxes.schema';

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(Checkboxes.name) private ChechboxesModel: Model<CheckboxesDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<Checkboxes>): Promise<Checkboxes> {
        return this.ChechboxesModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<Checkboxes>): Promise<Checkboxes[]> {
        return this.ChechboxesModel.find(usersFilterQuery);
    }
    async create(Checkboxes: Checkboxes): Promise<Checkboxes> {
        const newUsers = new this.ChechboxesModel(Checkboxes);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<Checkboxes>): Promise<Checkboxes> {
        return this.ChechboxesModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<Checkboxes>, Checkboxes:Partial<Checkboxes>): Promise<Checkboxes> {
        return this.ChechboxesModel.findByIdAndUpdate(usersFilterQuery, Checkboxes, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<Checkboxes>): Promise<Checkboxes> {
        return this.ChechboxesModel.findByIdAndDelete(usersFilterQuery);
    }
}