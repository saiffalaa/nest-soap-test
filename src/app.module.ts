import { Module, NestModule, MiddlewareConsumer, Logger } from '@nestjs/common';
import { addNumbersModule } from './addNumbers/addNumber.module';
import { divideModule } from './divideNumbers/divideNumber.module';
import { multiplyModule } from './multiplyNumbers/multiplyNumber.module';
import { SubtractModule } from './subtractNumbers/subtractNumbers.module';
import { LoggerMiddleware } from './Request-Respone-Tracking/reqMiddleware';
@Module({
  imports: [addNumbersModule, SubtractModule, multiplyModule, divideModule],
  providers: [Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
