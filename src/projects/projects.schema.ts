import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export type ProjectsDocument = Projects & Document;

@Schema()
export class Projects {

  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  accessType: string;

  @Prop()
  socialImage: "null";

  @Prop()
  deploymentType: "AWS";

  @Prop()
  deploymentId: string;

  @Prop()
  domain: "null";

}
export const ProjectsSchema = SchemaFactory.createForClass(Projects);