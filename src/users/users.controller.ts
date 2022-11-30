import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards, Request, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Users } from "./users.schema";
import { CreateRequestDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Strat } from './local';
const jwt=require('jsonwebtoken')

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) { }



    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.UsersService.login(req.user);
    }
   
    // @Get('login')
    
    // getLogin(@Res() response,@Req() req) {
    //     // console.log("authorization  ==>", req.headers.authorization);
    //     if (req.headers && req.headers.authorization) {
    //       const token = req.headers.authorization.split(' ')[1];
    //     //   console.log("token ==>", token)
    //       const user = jwt.verify(token,'secretKey');
    //       console.log("decode ==>", user);

    //     } else {
    //       response.json({ success: false, message: 'unauthorized access!' });
    //     }
    //     const User = this.UsersService.readAll();
    //    return User
    // }

    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),) createUsersDto: CreateRequestDto, @Res() response): Promise<Users> {
        const Users = await this.UsersService.createUser(createUsersDto);
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Users
        })
    }

    @Get()
    async readAll(@Req() req,@Res() res): Promise<Users[]> {
        const loc=await Strat.stack(req,res) 
        if(loc){
        const User = await this.UsersService.readAll();
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: User
        })}
        else {
            res.json({ success: false, message: 'unauthorized access!' });
          }
    }

    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Users> {
        const loc=await Strat.stack(req,res) 
        if(loc){
        const Users = await this.UsersService.GetreadById(id);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Users
        })}
        else {
            res.json({ success: false, message: 'unauthorized access!' });
          }
    }

    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() users: Users): Promise<Users> {
        const loc=await Strat.stack(req,res) 
        if(loc){
        const updatedUsers = await this.UsersService.updateById(id, users);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedUsers
        })}
        else {
            res.json({ success: false, message: 'unauthorized access!' });
          }
    }

    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Users> {
        const loc=await Strat.stack(req,res) 
        if(loc){
        const deletedUsers = await this.UsersService.deleteById(id);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedUsers
        })}
        else {
            res.json({ success: false, message: 'unauthorized access!' });
          }
    }
}

