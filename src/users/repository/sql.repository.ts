// import { Injectable } from '@nestjs/common';
// import { InjectModel } from "@nestjs/mongoose";
// import { FilterQuery, Model } from "mongoose";
// import { Repository } from 'src/domain/repository.interface';
// import { Users, UsersDocument } from '../users.schema';

// @Injectable()
// export class SqlRepository implements Repository {
//     constructor(@InjectModel(Users.name) private UsersModel: Model<UsersDocument>) { }

//     async findById(usersFilterQuery: FilterQuery<Users>): Promise<Users> {
//         return this.UsersModel.findById(usersFilterQuery);
//     }
//     async create(Users: Users): Promise<Users> {
//         const newUsers = new this.UsersModel(Users);
//         return newUsers.save();
//     }
//     // async find(usersFilterQuery: FilterQuery<Users>): Promise<Users[]> {
//     //     return this.UsersModel.find(usersFilterQuery)
//     // }

//     async readById(usersFilterQuery: FilterQuery<Users>): Promise<Users> {
//         return await this.UsersModel.findById(usersFilterQuery).exec();
//     }

//     async update(usersFilterQuery: FilterQuery<Users>, Users: Users): Promise<Users> {
//         return await this.UsersModel.findByIdAndUpdate(usersFilterQuery, { new: true })
//     }

//     async delete(usersFilterQuery: FilterQuery<Users>): Promise<any> {
//         return await this.UsersModel.findByIdAndRemove(usersFilterQuery);
//     }
// }