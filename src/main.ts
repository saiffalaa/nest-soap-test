import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerInterceptor } from './Request-Respone-Tracking/reqInterceptors';
import { ValidationPipe } from './pipes/validation';
import { MyLogger } from './customLogger/logger';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import morgan from 'morgan';
import morganBody from 'morgan-body';

async function bootstrap() {
  const { combine, timestamp, json } = winston.format;
  const logger = winston.createLogger({
    level: 'http',
    format: combine(json()),
    transports: [new winston.transports.Console()],
  });
  // const logger = WinstonModule.createLogger({
  //   format: combine(timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }), json()),
  //   transports: [new winston.transports.Console()],
  // });
  const app = await NestFactory.create(AppModule, {
    logger,
  });
  const loggerStream: any = {
    write: (message: string) => {
      // console.log(message);
      logger.info(message.replace(/"/g, ''));
      // .replace(/[\r\n\t]/gm, '').trim()
    },
  };
  morganBody(app.getHttpAdapter().getInstance(), {
    noColors: true,
    logRequestId: true,
    stream: loggerStream,
    includeNewLine: false,
    prettify: false,
    logReqUserAgent: false,
    logRequestBody: false,
  });
  // morgan.token('id', (req) => req['info']);
  // morgan.token('time', (req) => req['now']);

  // const morganMiddleware = morgan(' [:id] Request: :method :url at :time', {
  //   stream: {
  //     write: (message) => logger.info(message.trim()),
  //   },
  // });
  // const morganMiddleware2 = morgan(
  //   ':id Response Body:  :status :response-time ms',
  //   {
  //     stream: {
  //       // Configure Morgan to use our custom logger with the http severity
  //       write: (message) => logger.info(message.trim()),
  //     },
  //   },
  // );

  // app.use(morganMiddleware);
  // app.use(morganMiddleware2);
  // app.useLogger(new MyLogger());
  // app.useGlobalGuards(new validation());
  const config = new DocumentBuilder()
    .setTitle('nest-test')
    .setDescription('test-nest description')
    .setVersion('1.0')
    // .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalInterceptors(new loggerInterceptor());
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
