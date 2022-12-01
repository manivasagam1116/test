import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Repository } from './projects.repository.interface'; 
import { Projects, ProjectsDocument } from "../projects.schema";

@Injectable()
export class MongoRepository implements Repository {
    constructor(@InjectModel(Projects.name) private ProjectsModel: Model<ProjectsDocument>) { }
    async findOne(usersFilterQuery: FilterQuery<Projects>): Promise<Projects> {
        return this.ProjectsModel.findOne(usersFilterQuery);
    }
    async find(usersFilterQuery: FilterQuery<Projects>): Promise<Projects[]> {
        return this.ProjectsModel.find(usersFilterQuery);
    }
    async create(Projects: Projects): Promise<Projects> {
        const newUsers = new this.ProjectsModel(Projects);
        return newUsers.save();
    }

    async findById(usersFilterQuery: FilterQuery<Projects>): Promise<Projects> {
        return this.ProjectsModel.findById(usersFilterQuery);
    }

    async findByIdAndUpdate(usersFilterQuery: FilterQuery<Projects>, WorkSpaces:Partial<Projects>): Promise<Projects> {
        return this.ProjectsModel.findByIdAndUpdate(usersFilterQuery, WorkSpaces, { new: true })
    }

    async findByIdAndDelete(usersFilterQuery: FilterQuery<Projects>): Promise<Projects> {
        return this.ProjectsModel.findByIdAndDelete(usersFilterQuery);
    }
}