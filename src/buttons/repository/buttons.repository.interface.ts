import { FilterQuery } from "mongoose";
import { Buttons } from "../buttons.schema"; 

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<Buttons>): Promise<Buttons>;
    find(usersFilterQuery: FilterQuery<Buttons>): Promise<Buttons[]>;
    create(Buttons: Buttons): Promise<Buttons>;
    findById(usersFilterQuery: FilterQuery<Buttons>): Promise<Buttons>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<Buttons>, Buttons: Partial<Buttons>): Promise<Buttons>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<Buttons>): Promise<Buttons>;
}
