import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  id: number;

  @Prop()
  username: string;

  @Prop()
  sex: string;

  @Prop()
  email:string;

  @Prop()
  password: string;

  @Prop()
  createDate: Date;

  @Prop()
  updatedDate: Date;

  @Prop()
  lastLogin: Date;

  @Prop()
  hashRefreshToken: string;

  @Prop()
  workspaces:[
    {
      _id:string;
      name:string;
    }
  ]
}

export const UsersSchema = SchemaFactory.createForClass(Users);


const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

UsersSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          user.password = hash;
          next();
      })
    })
  })



