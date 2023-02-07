import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest<TUser = any>(err: any, user: any): TUser {
    if (!user) {
      throw new UnauthorizedException({
        status: false,
        message: 'Unauthorized!',
        data: {},
      });
    }
    return user;
  }
}
