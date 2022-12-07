import { ButtonsService } from "./buttons.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Buttons } from "./buttons.schema";
import { CreateRequestDto } from "./dto/create.buttons.dto"; 



@Controller('buttons')
export class ButtonsController {
    
    constructor(private readonly ButtonsService: ButtonsService) { }


    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),) createButtonsDto: CreateRequestDto, @Res() response): Promise<Buttons> {
        try{
            const Buttons = await this.ButtonsService.createUser(createButtonsDto);
            if(!Buttons){
                throw "Buttons not found"
            }
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Buttons
        })
    }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    
  
    @Get()
    async readAll(@Res() res): Promise<Buttons[]> {
        try{
            const Buttons = await this.ButtonsService.readAll();
            if(!Buttons){
                throw "Buttons not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Buttons
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Buttons> {
        try{
            const Buttons = await this.ButtonsService.GetreadById(id);
            if(!Buttons){
                throw "Buttons not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Buttons
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
   
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() Buttons: Buttons): Promise<Buttons> {
        try{
            const updatedButtons = await this.ButtonsService.updateById(id, Buttons);
            if(!updatedButtons){
                throw "Buttons not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedButtons
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Buttons> {
            try{
                const deletedButtons = await this.ButtonsService.deleteById(id);
                if(!deletedButtons){
                    throw "Buttons not found"
                }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedButtons
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
}

