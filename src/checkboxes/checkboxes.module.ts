import { Module } from '@nestjs/common';
import { CheckboxesService } from './checkboxes.service';
import { CheckboxesController } from './checkboxes.controller';
import { Checkboxes, CheckboxesSchema } from './checkboxes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CheckboxesModule,MongooseModule.forFeature([{name: Checkboxes.name, schema: CheckboxesSchema}])],
  controllers: [CheckboxesController],
  providers: [CheckboxesService]
})
export class CheckboxesModule {}
