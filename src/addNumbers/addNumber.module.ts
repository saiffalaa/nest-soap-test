import { Module } from '@nestjs/common';
import { addController } from './addNumber.controller';
import { addService } from './addNumber.service';
import { soapClient } from 'soapClient';
@Module({
  imports: [],
  controllers: [addController],
  providers: [addService, soapClient],
})
export class addNumbersModule {}
