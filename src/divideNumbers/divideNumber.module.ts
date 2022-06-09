import { Module } from '@nestjs/common';
import { divideController } from './divideNumber.controller';
import { divideService } from './divideNumber.service';
import { soapClient } from 'soapClient';
@Module({
  imports: [],
  controllers: [divideController],
  providers: [divideService, soapClient],
})
export class divideModule {}
