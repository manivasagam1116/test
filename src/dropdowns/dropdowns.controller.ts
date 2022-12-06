import { DropdownsService } from "./dropdowns.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Dropdowns } from "./dropdowns.schema";
import { CreateRequestDto } from "./dto/create.dropdowns.dto"; 



@Controller('dropdowns')
export class DropdownsController {
    
    constructor(private readonly DropdownsService: DropdownsService) { }

    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),) createUsersDto: CreateRequestDto, @Res() response): Promise<Dropdowns> {
        try{
            const Dropdowns = await this.DropdownsService.createUser(createUsersDto);
            if(!Dropdowns){
                throw "Dropdowns not found"
            }
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Dropdowns
        })
    }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    
  
    @Get()
    async readAll(@Res() res): Promise<Dropdowns[]> {
        try{
            const Dropdowns = await this.DropdownsService.readAll();
            if(!Dropdowns){
                throw "Dropdowns not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Dropdowns
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Dropdowns> {
        try{
            const Dropdowns = await this.DropdownsService.GetreadById(id);
            if(!Dropdowns){
                throw "Dropdowns not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Dropdowns
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
   
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() Dropdowns: Dropdowns): Promise<Dropdowns> {
        try{
            const updatedDropdowns = await this.DropdownsService.updateById(id, Dropdowns);
            if(!updatedDropdowns){
                throw "Dropdowns not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedDropdowns
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Dropdowns> {
            try{
                const deletedDropdowns = await this.DropdownsService.deleteById(id);
                if(!deletedDropdowns){
                    throw "Dropdowns not found"
                }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedDropdowns
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
}

