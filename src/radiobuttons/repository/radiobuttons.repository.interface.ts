import { FilterQuery } from "mongoose";
import { Radiobuttons } from "../radiobuttons.schema"; 

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<Radiobuttons>): Promise<Radiobuttons>;
    find(usersFilterQuery: FilterQuery<Radiobuttons>): Promise<Radiobuttons[]>;
    create(Radiobuttons: Radiobuttons): Promise<Radiobuttons>;
    findById(usersFilterQuery: FilterQuery<Radiobuttons>): Promise<Radiobuttons>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<Radiobuttons>, Buttons: Partial<Radiobuttons>): Promise<Radiobuttons>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<Radiobuttons>): Promise<Radiobuttons>;
}
