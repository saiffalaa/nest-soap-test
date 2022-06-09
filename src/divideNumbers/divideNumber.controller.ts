import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { divideOut } from 'inputs/divideOut.model';
import { schema } from 'inputs/numbers.dto';
import { Reqst } from 'src/decoraters/getRequest';
import { ValidationPipe } from 'src/pipes/validation';
import { divideService } from './divideNumber.service';

@Controller('divide')
@ApiResponse({ type: divideOut })
export class divideController {
  constructor(private readonly divideService: divideService) {}
  @Post()
  divideNumberaddNumber(
    @Body() data: schema,
    @Reqst(new ValidationPipe()) dataNumber: Request,
  ) {
    const { intA, intB } = dataNumber.body;
    const res = this.divideService.divideNumber(intA, intB);
    return res;
  }
}
