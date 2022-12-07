import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export type TextareasDocument = Textareas & Document;

@Schema()
export class Textareas {
  @Prop()
  id: "number";

  @Prop()
  name: "name";

  @Prop()
  placeholder:"placeholder";

  @Prop()
  type:"type";

  @Prop()
  maxlength: "max";

  @Prop()
  minlength: "min";

  @Prop()
  class: "";

  @Prop()
  pattern: "pattern";

  @Prop()
  required: "required";

  @Prop()
  value: "value";
}

export const TextareasSchema = SchemaFactory.createForClass(Textareas);