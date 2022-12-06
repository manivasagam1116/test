import { Module } from '@nestjs/common';
import { InputfeildsService } from './inputfeilds.service';
import { InputfeildsController } from './inputfeilds.controller';
import { Inputfeilds, InputfeildsSchema } from './inputfeilds.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [InputfeildsModule,MongooseModule.forFeature([{name: Inputfeilds.name, schema: InputfeildsSchema}])],
  controllers: [InputfeildsController],
  providers: [InputfeildsService]
})
export class InputfeildsModule {}
