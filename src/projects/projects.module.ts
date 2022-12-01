import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Projects, ProjectsSchema } from './projects.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Projects.name, schema: ProjectsSchema}])],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
