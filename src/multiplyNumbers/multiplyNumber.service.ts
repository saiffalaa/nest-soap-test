import { Logger, Injectable } from '@nestjs/common';
import { soapClient } from 'soapClient';

@Injectable()
export class multiplyService {
  private readonly logger = new Logger(multiplyService.name);
  constructor(
    private clientService: soapClient, //  ,private logger: MyLogger
  ) {}
  async multiplyNumber(intA, intB) {
    // this.logger.log(arguments);
    // this.logger.log('SASASA');
    const mul = await this.clientService.getClient();
    const result = await mul.MultiplyAsync({ intA, intB });
    const res = result[0];
    return res;
  }
}
