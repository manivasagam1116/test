import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users,UsersSchema} from './users.schema'
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.auth';



@Module({
  imports:[UsersModule, PassportModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '1d' },
  }),MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}])],
  controllers: [UsersController],
  providers: [UsersService,LocalStrategy]
})
export class UsersModule {}


