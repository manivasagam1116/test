import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { MongoRepository } from './repository/workspaces.mongo.repository';
import { WorkSpaces} from "./workspaces.schema";

@Injectable()
export class WorkspacesService {
    constructor(@InjectModel(WorkSpaces.name) private WorkspaceRepository: MongoRepository,) {}
   
    async createUser(WorkSpaces: WorkSpaces): Promise<WorkSpaces> {
        return this.WorkspaceRepository.create(WorkSpaces);
    }

    async readAll(): Promise<WorkSpaces[]> {
        return this.WorkspaceRepository.find({});
    }

    async GetreadById(id): Promise<WorkSpaces> {
        return this.WorkspaceRepository.findById(id);
    }

    async updateById(id, WorkSpaces: WorkSpaces): Promise<WorkSpaces> {
        return this.WorkspaceRepository.findByIdAndUpdate(id, WorkSpaces)
    }

    async deleteById(id): Promise<any> {
        return this.WorkspaceRepository.findByIdAndDelete(id);
    }
}