import { Module } from '@nestjs/common';
import { RadiobuttonsService } from './radiobuttons.service';
import { RadiobuttonsController } from './radiobuttons.controller';
import { Radiobuttons, RadiobuttonsSchema } from './radiobuttons.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RadiobuttonsModule,MongooseModule.forFeature([{name: Radiobuttons.name, schema: RadiobuttonsSchema}])],
  controllers: [RadiobuttonsController],
  providers: [RadiobuttonsService]
})
export class RadiobuttonsModule {}
