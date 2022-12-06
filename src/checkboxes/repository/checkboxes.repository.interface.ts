import { FilterQuery } from "mongoose";
import { Checkboxes } from "../checkboxes.schema"; 

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<Checkboxes>): Promise<Checkboxes>;
    find(usersFilterQuery: FilterQuery<Checkboxes>): Promise<Checkboxes[]>;
    create(Checkboxes: Checkboxes): Promise<Checkboxes>;
    findById(usersFilterQuery: FilterQuery<Checkboxes>): Promise<Checkboxes>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<Checkboxes>, Checkboxes: Partial<Checkboxes>): Promise<Checkboxes>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<Checkboxes>): Promise<Checkboxes>;
}
