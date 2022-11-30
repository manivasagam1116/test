import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo, TodoDocument } from "./todo.schema";

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private TodoModel: Model<TodoDocument>) {}

    async create(todo: Todo): Promise<Todo> {
        const newTodo = new this.TodoModel(todo);
        return newTodo.save();
    }
    async readAll(): Promise<Todo[]> {
        return await this.TodoModel.find().exec();
    }

    async readById(id): Promise<Todo> {
        return await this.TodoModel.findById(id).exec();
    }

    async update(id, todo: Todo): Promise<Todo> {
        return await this.TodoModel.findByIdAndUpdate(id, todo, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.TodoModel.findByIdAndRemove(id);
    }
}
