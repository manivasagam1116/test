import { TextareasService } from "./textareas.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Textareas } from "./textareas.schema";
import { CreateRequestDto } from "./dto/create.textareas.dto"; 



@Controller('textareas')
export class TextareasController {
    
    constructor(private readonly TextareasService: TextareasService) { }


    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),) createTextareasDto: CreateRequestDto, @Res() response): Promise<Textareas> {
        try{
            const Textareas = await this.TextareasService.createUser(createTextareasDto);
            if(!Textareas){
                throw "Textareas not found"
            }
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Textareas
        })
    }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    
  
    @Get()
    async readAll(@Res() res): Promise<Textareas[]> {
        try{
            const Textareas = await this.TextareasService.readAll();
            if(!Textareas){
                throw "Textareas not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Textareas
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Textareas> {
        try{
            const Textareas = await this.TextareasService.GetreadById(id);
            if(!Textareas){
                throw "Textareas not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Textareas
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
   
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() Textareas: Textareas): Promise<Textareas> {
        try{
            const updatedTextareas = await this.TextareasService.updateById(id, Textareas);
            if(!updatedTextareas){
                throw "Textareas not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedTextareas
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Textareas> {
            try{
                const deletedTextareas = await this.TextareasService.deleteById(id);
                if(!deletedTextareas){
                    throw "Textareas not found"
                }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedTextareas
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
}

