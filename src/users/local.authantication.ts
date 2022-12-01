import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class LocalAuthentication extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
  
  
}


// import { expressJwtSecret } from 'jwks-rsa';
// import {promisify} from 'util';
// import * as jwt from 'express-jwt';
// const checkJwt = promisify(
//   jwt({
//     secret: expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: '',
//     }),
//     audience: '',
//     issuer: '',
//     algorithms: ['RS256']
//   })
// )
// try{
// await checkJwt(req, res);
// return true;
// } catch(error) {
// throw new UnauthorizedException(error);
// }


  