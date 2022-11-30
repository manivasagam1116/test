import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule,UsersModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
