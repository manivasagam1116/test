import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './workspaces.repository.interface';
import { WorkSpaces, WorkSpacesDocument } from "../workspaces.schema";

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(WorkSpaces.name) private WorkspacesModel: Model<WorkSpacesDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<WorkSpaces>): Promise<WorkSpaces> {
        return this.WorkspacesModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<WorkSpaces>): Promise<WorkSpaces[]> {
        return this.WorkspacesModel.find(usersFilterQuery);
    }
    async create(WorkSpaces: WorkSpaces): Promise<WorkSpaces> {
        const newUsers = new this.WorkspacesModel(WorkSpaces);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<WorkSpaces>): Promise<WorkSpaces> {
        return this.WorkspacesModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<WorkSpaces>, WorkSpaces:Partial<WorkSpaces>): Promise<WorkSpaces> {
        return this.WorkspacesModel.findByIdAndUpdate(usersFilterQuery, WorkSpaces, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<WorkSpaces>): Promise<WorkSpaces> {
        return this.WorkspacesModel.findByIdAndDelete(usersFilterQuery);
    }
}