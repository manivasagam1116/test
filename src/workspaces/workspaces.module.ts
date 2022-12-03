import { Module } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesController } from './workspaces.controller';
import { WorkSpaces, WorkSpacesSchema } from './workspaces.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule,MongooseModule.forFeature([{name: WorkSpaces.name, schema: WorkSpacesSchema}])],
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
  exports:[WorkspacesService]
})
export class WorkspacesModule {}
