import { FilterQuery } from "mongoose";
import { Textareas } from "../textareas.schema"; 

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<Textareas>): Promise<Textareas>;
    find(usersFilterQuery: FilterQuery<Textareas>): Promise<Textareas[]>;
    create(Textareas: Textareas): Promise<Textareas>;
    findById(usersFilterQuery: FilterQuery<Textareas>): Promise<Textareas>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<Textareas>, Buttons: Partial<Textareas>): Promise<Textareas>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<Textareas>): Promise<Textareas>;
}
