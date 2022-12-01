import { FilterQuery } from "mongoose";
import { Users } from "src/users/users.schema";

export interface Repository {
    findOne(usersFilterQuery: FilterQuery<Users>): Promise<Users>;
    find(usersFilterQuery: FilterQuery<Users>): Promise<Users[]>;
    create(Users: Users): Promise<Users>;
    findById(usersFilterQuery: FilterQuery<Users>): Promise<Users>;
    findByIdAndUpdate(usersFilterQuery: FilterQuery<Users>, Users: Partial<Users>): Promise<Users>;
    findByIdAndDelete(usersFilterQuery: FilterQuery<Users>): Promise<Users>;
}
