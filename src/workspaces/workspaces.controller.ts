import { WorkspacesService } from "./workspaces.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, UseGuards, ValidationPipe } from "@nestjs/common";
import { WorkSpaces } from "./workspaces.schema";
import { CreateRequestDto } from "./dto/create.workspace.dto";
import { AuthGuard } from "@nestjs/passport";
import { UsersService } from "src/users/users.service";


@Controller('workspaces')
export class WorkspacesController {
    constructor(private readonly WorkspacesService: WorkspacesService,private usersservice:UsersService) { }

    @Post('/:id')
    async create(@Param('id')id:string ,@Body(new ValidationPipe({ transform: true }),)CreateRequestDto: CreateRequestDto, @Res() response): Promise<WorkSpaces> {
        
        try{
            const user=await this.usersservice.GetreadById(id);
        console.log(user)
            if(!user){
                throw "workspaces not found"
            }
        
        const work = await this.WorkspacesService.createUser(CreateRequestDto);
        const works={_id:work.subscriptionItemId,name:work.name};
        console.log(works)
         user.workspaces.push(works)
        const users=await this.usersservice.updateById(id,user);
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "workspaces inserted successfully",
            result: users
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
    async readAll(@Res() res): Promise<WorkSpaces[]> {
        try{
        const worksapce = await this.WorkspacesService.readAll();
        if(!worksapce){
            throw "worksapces not found"
        }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: worksapce
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
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<WorkSpaces> {
        try{
        const worksapces = await this.WorkspacesService.GetreadById(id);
        if(!worksapces){
            throw "worksapces not found"
        }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: worksapces
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
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() workSpaces: WorkSpaces): Promise<WorkSpaces> {
        try{
        const updatedWorkspaces = await this.WorkspacesService.updateById(id, workSpaces);
        if(!updatedWorkspaces){
            throw "updatedWorkspaces not found"
        }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedWorkspaces
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
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<WorkSpaces> {
        try{
        const deletedWorkspaces = await this.WorkspacesService.deleteById(id);
        if(!deletedWorkspaces){
            throw "deletedWorkspaces not found"
        }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedWorkspaces
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })
    }
    }
}

