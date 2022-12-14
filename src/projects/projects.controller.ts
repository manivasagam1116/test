import { ProjectsService } from "./projects.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, UseGuards, ValidationPipe } from "@nestjs/common";
import { Projects } from "./projects.schema";
import { CreateRequestDto } from "./dto/create.projects.dto";
import { AuthGuard } from "@nestjs/passport";
import { WorkspacesService } from "src/workspaces/workspaces.service";


@Controller('projects')
export class ProjectsController {
    constructor(private readonly ProjectsService: ProjectsService ,private workspacesService:WorkspacesService) { }


    @Post('/:id')
    async createUsers(@Param('id')id:string ,@Body(new ValidationPipe({ transform: true }),)createProjectsDto: CreateRequestDto,Projects: Projects, @Res() response): Promise<Projects> {
        try{
            const user=await this.workspacesService.GetreadById(id);
        // console.log(user)
            if(!user){
                throw "projects not found"
            }
        const proj = await this.ProjectsService.createUser(createProjectsDto);
        const project={_id:proj.id,name:proj.name};
        // console.log(project)
         user.projects.push(project)
        const users=await this.workspacesService.updateById(id,user);
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
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
    async readAll(@Res() res): Promise<Projects[]> {
        try{
            const projects = await this.ProjectsService.readAll();        
            if(!projects){
                throw "projects not found"
            }
        
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: projects
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
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Projects> {
        try{
            const projects = await this.ProjectsService.GetreadById(id);
            if(!projects){
                throw "projects not found"
            }
        
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: projects
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
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() Projects: Projects): Promise<Projects> {
        try{
            const updatedProjects = await this.ProjectsService.updateById(id, Projects);
            if(!updatedProjects){
                throw "projects not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedProjects
           // $push: { : "" }
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
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Projects> {
        try{
            const deletedProjects = await this.ProjectsService.deleteById(id);
            if(!deletedProjects){
                throw "projects not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedProjects
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
}

