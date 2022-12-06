import { Module } from '@nestjs/common';
import { ButtonsService } from './buttons.service';
import { ButtonsController } from './buttons.controller';
import { Buttons, ButtonsSchema } from './buttons.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ButtonsModule,MongooseModule.forFeature([{name: Buttons.name, schema: ButtonsSchema}])],
  controllers: [ButtonsController],
  providers: [ButtonsService]
})
export class ButtonsModule {}
