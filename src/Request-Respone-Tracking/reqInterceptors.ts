import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class loggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(loggerInterceptor.name);
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const res = context.switchToHttp().getResponse();
    return next
      .handle()
      .pipe
      // tap((resBody) => {
      //   this.logger.log({
      //     id: context.getArgs()[0].info,
      //     body: JSON.stringify(resBody),
      //   });
      //   this.logger.log({
      //     id: context.getArgs()[0].info,
      //     code: res['statusCode'],
      //     time: Date.now() - context.getArgs()[0].now,
      //   });
      // }),
      ();
  }
}
