import { WorkspacesService } from "./workspaces.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, UseGuards, ValidationPipe } from "@nestjs/common";
import { WorkSpaces } from "./workspaces.schema";
import { CreateRequestDto } from "./dto/create.workspace.dto";
import { AuthGuard } from "@nestjs/passport";


@Controller('workspaces')
export class WorkspacesController {
    constructor(private readonly WorkspacesService: WorkspacesService) { }


    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),)createWorkspaceDto: CreateRequestDto,workSpaces: WorkSpaces, @Res() response): Promise<WorkSpaces> {
        const worksapces = await this.WorkspacesService.createUser(createWorkspaceDto);
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: worksapces
        })
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async readAll(@Res() res): Promise<WorkSpaces[]> {
        const worksapce = await this.WorkspacesService.readAll();
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: worksapce
        })
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<WorkSpaces> {
        
        const worksapces = await this.WorkspacesService.GetreadById(id);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: worksapces
        })
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() workSpaces: WorkSpaces): Promise<WorkSpaces> {
    
        const updatedWorkspaces = await this.WorkspacesService.updateById(id, workSpaces);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedWorkspaces
        })
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<WorkSpaces> {
        const deletedWorkspaces = await this.WorkspacesService.deleteById(id);
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedWorkspaces
        })
    }
}

