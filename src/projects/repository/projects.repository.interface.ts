import { FilterQuery } from "mongoose";
import { Projects } from "../projects.schema";

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<Projects>): Promise<Projects>;
    find(usersFilterQuery: FilterQuery<Projects>): Promise<Projects[]>;
    create(Projects: Projects): Promise<Projects>;
    findById(usersFilterQuery: FilterQuery<Projects>): Promise<Projects>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<Projects>, Projects:Partial<Projects>): Promise<Projects>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<Projects>): Promise<Projects>;
}