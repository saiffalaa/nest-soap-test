import { Inject, Injectable } from '@nestjs/common';
import { soapClient } from 'soapClient';
// import { Numbers } from '../../inputs/numbers.model';
// import { soapClient } from '../../soapClient';
@Injectable()
export class addService {
  constructor(private clientService: soapClient) {}
  async addNumber(intA: number, intB: number) {
    const client = await this.clientService.getClient();
    const resp = await client.AddAsync({ intA, intB });
    const result = resp[0];
    return result;
  }
}
