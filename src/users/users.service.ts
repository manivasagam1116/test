import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Users } from "./users.schema";
import { MongoRepository } from './repository/users.mongo.repository';
import { CreateRequestDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsersService {

    constructor(@InjectModel(Users.name) private UsersRepository: MongoRepository, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.UsersRepository.findOne({ username });
        // console.log("getuser==>",user);
        if (!user) return null;
        const passwordValid = await bcrypt.compare(password, user.password);
        // console.log("pass==>",passwordValid);
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        if (user && passwordValid) {
            return user;
        }
        return null;
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }


    async createUser(createUsersDto: CreateRequestDto): Promise<Users> {
        return this.UsersRepository.create(createUsersDto);
    }
    async readAll(): Promise<Users[]> {
        return this.UsersRepository.find({});
    }

    async GetreadById(id): Promise<Users> {
        return this.UsersRepository.findById(id);
    }

    async updateById(id, Users: Users): Promise<Users> {
        return this.UsersRepository.findByIdAndUpdate(id, Users)
    }

    async deleteById(id): Promise<any> {
        return this.UsersRepository.findByIdAndDelete(id);
    }
}
