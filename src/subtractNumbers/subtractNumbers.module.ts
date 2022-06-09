import { Module } from '@nestjs/common';
import { SubtractController } from './subtractNumbers.controller';
import { SubtractService } from './subtractNumbers.service';
import { soapClient } from 'soapClient';
@Module({
  imports: [],
  controllers: [SubtractController],
  providers: [SubtractService, soapClient],
})
export class SubtractModule {}
