import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './users.repository.interface';
import { Users, UsersDocument } from '../users.schema';

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(Users.name) private UsersModel: Model<UsersDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<Users>): Promise<Users> {
        return this.UsersModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<Users>): Promise<Users[]> {
        return this.UsersModel.find(usersFilterQuery);
    }
    async create(Users: Users): Promise<Users> {
        const newUsers = new this.UsersModel(Users);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<Users>): Promise<Users> {
        return this.UsersModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<Users>, Users:Partial<Users>): Promise<Users> {
        return this.UsersModel.findByIdAndUpdate(usersFilterQuery, Users, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<Users>): Promise<Users> {
        return this.UsersModel.findByIdAndDelete(usersFilterQuery);
    }
}