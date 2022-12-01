import { ProjectsService } from "./projects.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Projects } from "./projects.schema";


@Controller('projects')
export class ProjectsController {
    constructor(private readonly ProjectsService: ProjectsService) { }


    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),)Projects: Projects, @Res() response): Promise<Projects> {
        const projects = await this.ProjectsService.createUser(Projects);
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: projects
        })
    }
    
    @Get()
    async readAll(@Res() res): Promise<Projects[]> {
        const projects = await this.ProjectsService.readAll();
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: projects
        })
    }
 
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Projects> {
        
        const projects = await this.ProjectsService.GetreadById(id);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: projects
        })
    }
   
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() Projects: Projects): Promise<Projects> {
    
        const updatedProjects = await this.ProjectsService.updateById(id, Projects);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedProjects
        })
    }

    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Projects> {
        const deletedProjects = await this.ProjectsService.deleteById(id);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedProjects
        })
    }
}

