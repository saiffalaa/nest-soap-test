import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class MyLogger extends ConsoleLogger {
  constructor() {
    process.env.NO_COLOR = 'false';
    super();
  }
  log(
    message: {
      id: string;
      body?: string;
      code?: string;
      time?: string;
      ip?: string;
      method?: string;
      url?: string;
      startTime?: string;
    },
    stack?: string,
    context?: string,
  ) {
    if (message.body) {
      super.log(`info: [${message.id}] Response Body: ${message.body}}`);
    } else if (message.code) {
      super.log(
        `info: [${message.id}] Response: ${message.code} ${message.time}ms`,
      );
    } else if (message.method) {
      super.log(
        `info: [${message.id}] Request: ${message.method} ${message.url} at ${message.startTime} IP: ${message.ip}`,
      );
    } else {
      super.log(message);
    }
  }
}
