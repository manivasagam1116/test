import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Todo } from "./todo.schema";

@Controller('todos')
export class TodoController {
    constructor(private readonly TodoService: TodoService){}
    

    @Post()
    async createTodo(@Res() response, @Body() todo: Todo) {
        const newTodo = await this.TodoService.create(todo);
        return response.status(HttpStatus.CREATED).json({
            status:"success",
            statuscode:"200",
            message:"student data inserted successfully",
            result:newTodo
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const Todos = await this.TodoService.readAll();
        return response.status(HttpStatus.OK).json({
            status:"success",
            statuscode:"200",
            result:Todos
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const Todo = await this.TodoService.readById(id);
        return response.status(HttpStatus.OK).json({
            status:"success",
            statuscode:"200",
            result: Todo
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() todo: Todo) {
        const updatedTodo = await this.TodoService.update(id, todo);
        return response.status(HttpStatus.OK).json({
            status:"success",
            statuscode:"200",
            message:"student data updated successfully",
            result: updatedTodo
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedTodo = await this.TodoService.delete(id);
        return response.status(HttpStatus.OK).json({
            status:"success",
            statuscode:"200",
            message:"student data deleted successfully",
            result: deletedTodo
        })
    }
}
