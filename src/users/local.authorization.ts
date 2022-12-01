import { Injectable, } from '@nestjs/common';
import { PassportStrategy} from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';





@Injectable()
export class JwtAuthorization extends PassportStrategy(Strategy)  {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }

  //verified callback
  async validate(username:string) :Promise<any>{
    return  'done';
  }
  
}





// const jwt = require('jsonwebtoken')
// export class LocalAuthorization {
//   static stack=(req,res) =>{
//     // console.log("authorization  ==>", req.headers.authorization);
//     if (req.headers && req.headers.authorization) {
//       const token = req.headers.authorization.split(' ')[1];
//       //   console.log("token ==>", token)
//       const user = jwt.verify(token, 'secretKey');
//       // console.log("decode ==>", user);
//      return user
//     } else {
//       res.json({ statuscode: '400', message: 'unauthorized access!' });
//     }
    
//   }
// }
