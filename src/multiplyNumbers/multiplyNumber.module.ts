import { Module } from '@nestjs/common';
import { MultiplyController } from './multiplyNumber.controller';
import { multiplyService } from './multiplyNumber.service';
import { soapClient } from 'soapClient';
import { LoggerModule } from './../customLogger/logger.module';
@Module({
  imports: [LoggerModule],
  controllers: [MultiplyController],
  providers: [multiplyService, soapClient],
})
export class multiplyModule {}
