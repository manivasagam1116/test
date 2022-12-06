import { CheckboxesService } from "./checkboxes.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Checkboxes } from "./checkboxes.schema";
import { CreateRequestDto } from "./dto/create.checkbox.dto";

@Controller('checkboxes')
export class CheckboxesController {
    
    constructor(private readonly CheckboxesService: CheckboxesService) { }


    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),) createUsersDto: CreateRequestDto, @Res() response): Promise<Checkboxes> {
        try{
            const Chechboxes = await this.CheckboxesService.createUser(createUsersDto);
            if(!Chechboxes){
                throw "Chechboxes not found"
            }
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Chechboxes
        })
    }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    
  
    @Get()
    async readAll(@Res() res): Promise<Checkboxes[]> {
        try{
            const Chechboxes = await this.CheckboxesService.readAll();
            if(!Chechboxes){
                throw "Chechboxes not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Chechboxes
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Checkboxes> {
        try{
            const Chechboxes = await this.CheckboxesService.GetreadById(id);
            if(!Chechboxes){
                throw "users not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Chechboxes
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
   
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() Checkboxes: Checkboxes): Promise<Checkboxes> {
        try{
            const updatedChechboxes = await this.CheckboxesService.updateById(id, Checkboxes);
            if(!updatedChechboxes){
                throw "Chechboxes not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedChechboxes
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Checkboxes> {
            try{
                const deletedChechboxes= await this.CheckboxesService.deleteById(id);
                if(!deletedChechboxes){
                    throw "Chechboxes not found"
                }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedChechboxes
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
}

