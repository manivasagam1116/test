import { Module } from '@nestjs/common';
import { TextareasService } from './textareas.service';
import { TextareasController } from './textareas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Textareas, TextareasSchema } from './textareas.schema';

@Module({
  imports: [TextareasModule,MongooseModule.forFeature([{name: Textareas.name, schema: TextareasSchema}])],
  controllers: [TextareasController],
  providers: [TextareasService]
})
export class TextareasModule {}
