import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { MongoRepository } from './repository/projects.mongo.repository';
import { Projects} from "./projects.schema";

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Projects.name) private ProjectsRepository: MongoRepository,) {}
   
    async createUser(Projects: Projects): Promise<Projects> {
        return this.ProjectsRepository.create(Projects);
    }

    async readAll(): Promise<Projects[]> {
        return this.ProjectsRepository.find({});
    }

    async GetreadById(id): Promise<Projects> {
        return this.ProjectsRepository.findById(id);
    }

    async updateById(id, Projects: Projects): Promise<Projects> {
        return this.ProjectsRepository.findByIdAndUpdate(id, Projects)
    }

    async deleteById(id): Promise<any> {
        return this.ProjectsRepository.findByIdAndDelete(id);
    }
}