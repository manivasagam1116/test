import { FilterQuery } from "mongoose";
import { Dropdowns } from "../dropdowns.schema"; 

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<Dropdowns>): Promise<Dropdowns>;
    find(usersFilterQuery: FilterQuery<Dropdowns>): Promise<Dropdowns[]>;
    create(Dropdowns: Dropdowns): Promise<Dropdowns>;
    findById(usersFilterQuery: FilterQuery<Dropdowns>): Promise<Dropdowns>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<Dropdowns>, Buttons: Partial<Dropdowns>): Promise<Dropdowns>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<Dropdowns>): Promise<Dropdowns>;
}
