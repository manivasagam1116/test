import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './radiobuttons.repository.interface'; 
import { Radiobuttons, RadiobuttonsDocument } from '../radiobuttons.schema';

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(Radiobuttons.name) private RadiobuttonsModel: Model<RadiobuttonsDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<Radiobuttons>): Promise<Radiobuttons> {
        return this.RadiobuttonsModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<Radiobuttons>): Promise<Radiobuttons[]> {
        return this.RadiobuttonsModel.find(usersFilterQuery);
    }
    async create(Radiobuttons: Radiobuttons): Promise<Radiobuttons> {
        const newUsers = new this.RadiobuttonsModel(Radiobuttons);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<Radiobuttons>): Promise<Radiobuttons> {
        return this.RadiobuttonsModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<Radiobuttons>, Buttons:Partial<Radiobuttons>): Promise<Radiobuttons> {
        return this.RadiobuttonsModel.findByIdAndUpdate(usersFilterQuery, Buttons, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<Radiobuttons>): Promise<Radiobuttons> {
        return this.RadiobuttonsModel.findByIdAndDelete(usersFilterQuery);
    }
}