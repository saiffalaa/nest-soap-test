import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { schema } from 'inputs/numbers.dto';
import { subtractOut } from 'inputs/subtractOut.model';
import { Reqst } from 'src/decoraters/getRequest';
import { ValidationPipe } from 'src/pipes/validation';
import { SubtractService } from './subtractNumbers.service';

@Controller('subtract')
export class SubtractController {
  constructor(private readonly subtractService: SubtractService) {}
  @Post()
  @ApiResponse({ type: subtractOut })
  subtractNumbersaddNumber(
    @Body() data: schema,
    @Reqst(new ValidationPipe()) dataNumber: Request,
  ) {
    const { intA, intB } = dataNumber.body;
    const sub = this.subtractService.subtractNumber(intA, intB);
    return sub;
  }
}
