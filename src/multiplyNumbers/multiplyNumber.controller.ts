import { Body, Controller, Post, Req, ValidationPipe } from '@nestjs/common';
import { schema } from 'inputs/numbers.dto';
import { multiplyService } from './multiplyNumber.service';
import { Reqst } from '../decoraters/getRequest';
import { Request } from 'express';
import { ApiResponse } from '@nestjs/swagger';
import { multiplyOut } from './../../inputs/multiplyOut.model';

@Controller('multiply')
@ApiResponse({ type: multiplyOut })
export class MultiplyController {
  constructor(private readonly multiplyService: multiplyService) {}
  @Post()
  multiplyNumber(
    @Body() data: schema,
    @Reqst(new ValidationPipe()) dataNumber: Request,
  ) {
    // console.log(req);
    const { intA, intB } = dataNumber.body;
    const res = this.multiplyService.multiplyNumber(intA, intB);
    return res;
  }
}
