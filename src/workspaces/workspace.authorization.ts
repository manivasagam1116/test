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