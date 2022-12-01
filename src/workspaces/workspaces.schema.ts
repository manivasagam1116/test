import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export type WorkSpacesDocument = WorkSpaces & Document;

@Schema()
export class WorkSpaces {

  @Prop()
  subscriptionItemId: string;

  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  teamCollaborators: string;
}

export const WorkSpacesSchema = SchemaFactory.createForClass(WorkSpaces);