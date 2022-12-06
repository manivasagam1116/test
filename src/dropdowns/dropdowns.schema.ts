import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export type DropdownsDocument = Dropdowns & Document;

@Schema()
export class Dropdowns {
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

export const DropdownsSchema = SchemaFactory.createForClass(Dropdowns);