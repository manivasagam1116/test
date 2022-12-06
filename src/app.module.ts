import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ProjectsModule } from './projects/projects.module';
import { InputfeildsModule } from './inputfeilds/inputfeilds.module';
import { ButtonsModule } from './buttons/buttons.module';
import { DropdownsModule } from './dropdowns/dropdowns.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';



@Module({
  imports: [UsersModule,WorkspacesModule, ProjectsModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),InputfeildsModule, ButtonsModule, DropdownsModule, CheckboxesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
