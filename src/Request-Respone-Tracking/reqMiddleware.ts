import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as crypto from 'crypto';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    global.req = req;
    req['id'] = crypto.randomUUID();
    req['now'] = new Date().toString().split('(E')[0];
    // console.log(
    //   `info: [${req['info']}] Request: ${req.method} ${req.originalUrl} at ${
    //     new Date().toString().split('(E')[0]
    //   } IP: ${req.socket.remoteAddress}`,
    // );
    next();
  }
}
