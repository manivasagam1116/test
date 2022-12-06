import { FilterQuery } from "mongoose";
import { Inputfeilds } from "../inputfeilds.schema"; 

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<Inputfeilds>): Promise<Inputfeilds>;
    find(usersFilterQuery: FilterQuery<Inputfeilds>): Promise<Inputfeilds[]>;
    create(Inputfeilds: Inputfeilds): Promise<Inputfeilds>;
    findById(usersFilterQuery: FilterQuery<Inputfeilds>): Promise<Inputfeilds>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<Inputfeilds>, Inputfeilds: Partial<Inputfeilds>): Promise<Inputfeilds>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<Inputfeilds>): Promise<Inputfeilds>;
}
