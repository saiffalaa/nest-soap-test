import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { schema } from 'inputs/numbers.dto';

@Injectable()
export class ValidationPipe implements PipeTransform {
  private readonly logger = new Logger(ValidationPipe.name);
  constructor() {}
  async transform(value: any, metatype: ArgumentMetadata) {
    // const object = plainToClass(metatype, value);
    // console.log(metatype);
    // console.log(value.body);
    const object = new schema();
    object.intA = value.body.intA;
    object.intB = value.body.intB;
    const errors = await validate(object);
    if (errors.length > 0) {
      this.logger.log({
        id: value.info,
        code: HttpStatus.BAD_REQUEST,
        time: Date.now() - value.now,
      });
      // console.log(
      //   `info: [${value.info}] Response: ${HttpStatus.BAD_REQUEST} ${
      //     Date.now() - value.now
      //   }ms`,
      // );
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
