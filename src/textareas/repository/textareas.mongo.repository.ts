import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './textareas.repository.interface'; 
import { Textareas, TextareasDocument } from '../textareas.schema';

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(Textareas.name) private TextareasModel: Model<TextareasDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<Textareas>): Promise<Textareas> {
        return this.TextareasModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<Textareas>): Promise<Textareas[]> {
        return this.TextareasModel.find(usersFilterQuery);
    }
    async create(Textareas: Textareas): Promise<Textareas> {
        const newUsers = new this.TextareasModel(Textareas);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<Textareas>): Promise<Textareas> {
        return this.TextareasModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<Textareas>, Textareas:Partial<Textareas>): Promise<Textareas> {
        return this.TextareasModel.findByIdAndUpdate(usersFilterQuery, Textareas, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<Textareas>): Promise<Textareas> {
        return this.TextareasModel.findByIdAndDelete(usersFilterQuery);
    }
}