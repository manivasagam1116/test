import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  id: number;

  @Prop()
  content: string;

  @Prop()
  isDone: Boolean;
 
  @Prop()
  createdDate: Date;

  @Prop()
  updatedDate: Date;
 
}

export const TodoSchema = SchemaFactory.createForClass(Todo);