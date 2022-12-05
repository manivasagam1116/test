import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards, Request, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Users } from "./users.schema";
import { CreateRequestDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) { }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.UsersService.login(req.user);
    }

    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),) createUsersDto: CreateRequestDto, @Res() response): Promise<Users> {
        try{
            const Users = await this.UsersService.createUser(createUsersDto);
            if(!Users){
                throw "users not found"
            }
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Users
        })
    }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async readAll(@Res() res): Promise<Users[]> {
        try{
            const User = await this.UsersService.readAll();
            if(!User){
                throw "users not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: User
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Users> {
        try{
            const Users = await this.UsersService.GetreadById(id);
            if(!Users){
                throw "users not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Users
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() users: Users): Promise<Users> {
        try{
            const updatedUsers = await this.UsersService.updateById(id, users);
            if(!updatedUsers){
                throw "users not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedUsers
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Users> {
        // const loc=await Strat.stack(req,res) 
        // if(loc){
            try{
                const deletedUsers = await this.UsersService.deleteById(id);
                if(!deletedUsers){
                    throw "users not found"
                }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedUsers
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    // }
    //     else {
    //         res.json({ statuscode: '400', message: 'unauthorized access!' });
    //       }
    }
}

