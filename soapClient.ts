import { Injectable } from '@nestjs/common';
import * as soap from 'soap';
// const func = async () => {
//   try {
//     const url = 'http://www.dneonline.com/calculator.asmx?wsdl';
//     const client = await soap.createClientAsync(url);
//     console.log('client', client);
//     return client;
//   } catch (err) {
//     const error = new Error('Error in connection ' + err);
//     throw error;
//   }
// };
// export default func;
@Injectable()
export class soapClient {
  async getClient() {
    try {
      const url = 'http://www.dneonline.com/calculator.asmx?wsdl';
      // console.log(soap);
      const client = await soap.createClientAsync(url);
      // console.log('client', client);
      return client;
    } catch (err) {
      const error = new Error('Error in connection ' + err);
      throw error;
    }
  }
}
