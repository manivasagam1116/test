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
        const Users = await this.UsersService.createUser(createUsersDto);
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Users
        })
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async readAll(@Res() res): Promise<Users[]> {
        const User = await this.UsersService.readAll();
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: User
        })
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Users> {
        
        const Users = await this.UsersService.GetreadById(id);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Users
        })
    }
    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() users: Users): Promise<Users> {
    
        const updatedUsers = await this.UsersService.updateById(id, users);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedUsers
        })
    }
    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Users> {
        // const loc=await Strat.stack(req,res) 
        // if(loc){
        const deletedUsers = await this.UsersService.deleteById(id);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedUsers
        })
    // }
    //     else {
    //         res.json({ statuscode: '400', message: 'unauthorized access!' });
    //       }
    }
}

