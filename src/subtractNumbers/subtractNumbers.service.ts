import { Inject, Injectable } from '@nestjs/common';
import soap from 'soap';
// import { Client } from 'nestjs-soap';
import { soapClient } from 'soapClient';
@Injectable()
export class SubtractService {
  constructor(private soapService: soapClient) {}
  async subtractNumber(intA, intB) {
    const sub = await this.soapService.getClient();
    const result = await sub.SubtractAsync({ intA, intB });
    const res = result[0];
    return res;
  }
}
