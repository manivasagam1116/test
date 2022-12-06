import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export type InputfeildsDocument = Inputfeilds & Document;

@Schema()
export class Inputfeilds {
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

export const InputfeildsSchema = SchemaFactory.createForClass(Inputfeilds);