import { FilterQuery } from "mongoose";
import { WorkSpaces } from "../workspaces.schema";

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<WorkSpaces>): Promise<WorkSpaces>;
    find(usersFilterQuery: FilterQuery<WorkSpaces>): Promise<WorkSpaces[]>;
    create(WorkSpaces: WorkSpaces): Promise<WorkSpaces>;
    findById(usersFilterQuery: FilterQuery<WorkSpaces>): Promise<WorkSpaces>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<WorkSpaces>, WorkSpaces:Partial<WorkSpaces>): Promise<WorkSpaces>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<WorkSpaces>): Promise<WorkSpaces>;
}