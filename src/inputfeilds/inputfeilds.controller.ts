import { InputfeildsService } from "./inputfeilds.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put,Req, Res, ValidationPipe } from "@nestjs/common";
import { Inputfeilds } from "./inputfeilds.schema"; 
import { CreateRequestDto } from "./dto/create.inputfeilds.dto"; 



@Controller('inputfeilds')
export class InputfeildsController {
    
    constructor(private readonly InputfeildsService: InputfeildsService) { }


    @Post()
    async createUsers(@Body(new ValidationPipe({ transform: true }),) createUsersDto: CreateRequestDto, @Res() response): Promise<Inputfeilds> {
        try{
            const Inpitfeilds = await this.InputfeildsService.createUser(createUsersDto);
            if(!Inpitfeilds){
                throw "Inpitfeilds not found"
            }
        return response.status(HttpStatus.CREATED).json({
            status: "success",
            statuscode: "201",
            message: "student data inserted successfully",
            result: Inpitfeilds
        })
    }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
    
  
    @Get()
    async readAll(@Res() res): Promise<Inputfeilds[]> {
        try{
            const Inpitfeilds = await this.InputfeildsService.readAll();
            if(!Inpitfeilds){
                throw "Inpitfeilds not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Inpitfeilds
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Get('/:id')
    async findById(@Req() req,@Res() res, @Param('id') id:string): Promise<Inputfeilds> {
        try{
            const Inpitfeilds = await this.InputfeildsService.GetreadById(id);
            if(!Inpitfeilds){
                throw "Inpitfeilds not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            result: Inpitfeilds
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
   
    @Put('/:id')
    async update(@Req() req,@Res() res, @Param('id') id:string, @Body() Inputfeilds: Inputfeilds): Promise<Inputfeilds> {
        try{
            const updatedInpitfeilds = await this.InputfeildsService.updateById(id, Inputfeilds);
            if(!updatedInpitfeilds){
                throw "Inpitfeilds not found"
            }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "202",
            message: "student data updated successfully",
            result: updatedInpitfeilds
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
 
    @Delete('/:id')
    async delete(@Req() req,@Res() res, @Param('id') id:string): Promise<Inputfeilds> {
            try{
                const deletedInpitfeilds = await this.InputfeildsService.deleteById(id);
                if(!deletedInpitfeilds){
                    throw "Inpitfeilds not found"
                }
        return res.status(HttpStatus.OK).json({
            status: "success",
            statuscode: "200",
            message: "student data deleted successfully",
            result: deletedInpitfeilds
        })
    }catch(error){
        return res.status(HttpStatus.BAD_REQUEST).json({
           
            statuscode: "400",
            message: Error,
           
        })

    }
    }
}

