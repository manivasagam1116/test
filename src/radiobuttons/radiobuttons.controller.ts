import { RadiobuttonsService } from "./radiobuttons.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Radiobuttons } from "./radiobuttons.schema";
import { CreateRequestDto } from "./dto/create.radiobuttons.dto"; 



@Controller('radiobuttons')
export class RadiobuttonsController {
    
    constructor(private readonly RadiobuttonsService: RadiobuttonsService) { }


    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),) createRadiobuttonsDto: CreateRequestDto, @Res() response): Promise<Radiobuttons> {
        try{
            const Radiobuttons = await this.RadiobuttonsService.createUser(createRadiobuttonsDto);
            if(!Radiobuttons){
                throw "Radiobuttons not found"
            }
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Radiobuttons
        })
    }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    
  
    @Get()
    async readAll(@Res() res): Promise<Radiobuttons[]> {
        try{
            const Radiobuttons = await this.RadiobuttonsService.readAll();
            if(!Radiobuttons){
                throw "Radiobuttons not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Radiobuttons
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Radiobuttons> {
        try{
            const Radiobuttons = await this.RadiobuttonsService.GetreadById(id);
            if(!Radiobuttons){
                throw "Buttons not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Radiobuttons
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
   
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() Radiobuttons: Radiobuttons): Promise<Radiobuttons> {
        try{
            const deletedRadiobuttons = await this.RadiobuttonsService.updateById(id, Radiobuttons);
            if(!deletedRadiobuttons){
                throw "Radiobuttons not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: deletedRadiobuttons
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Radiobuttons> {
            try{
                const deletedRadiobuttons = await this.RadiobuttonsService.deleteById(id);
                if(!deletedRadiobuttons){
                    throw "Radiobuttons not found"
                }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedRadiobuttons
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
}

