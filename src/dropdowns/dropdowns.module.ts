import { Module } from '@nestjs/common';
import { DropdownsService } from './dropdowns.service';
import { DropdownsController } from './dropdowns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dropdowns, DropdownsSchema } from './dropdowns.schema';

@Module({
  imports: [DropdownsModule,MongooseModule.forFeature([{name: Dropdowns.name, schema: DropdownsSchema}])],
  controllers: [DropdownsController],
  providers: [DropdownsService]
})
export class DropdownsModule {}
