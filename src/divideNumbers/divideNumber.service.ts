import { Inject, Injectable } from '@nestjs/common';
import { soapClient } from 'soapClient';

@Injectable()
export class divideService {
  constructor(private clientService: soapClient) {}
  async divideNumber(intA, intB) {
    const client = await this.clientService.getClient();
    const resp = await client.DivideAsync({ intA, intB });
    const result = resp[0];
    return result;
  }
}
