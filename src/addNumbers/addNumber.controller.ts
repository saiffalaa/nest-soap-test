import { Body, Controller, Post } from '@nestjs/common';
import { addService } from './addNumber.service';
import { Reqst } from './../decoraters/getRequest';
import { Request } from 'express';
import { schema } from 'inputs/numbers.dto';
import { ValidationPipe } from 'src/pipes/validation';
import { ApiResponse } from '@nestjs/swagger';
import { addOut } from 'inputs/addOut.dto';

@Controller('add')
export class addController {
  constructor(private readonly addService: addService) {}
  @Post()
  @ApiResponse({ type: addOut })
  async addNumber(
    @Body() data: schema,
    @Reqst(new ValidationPipe()) dataNumber: Request,
  ) {
    const { intA, intB } = dataNumber.body;
    const res = await this.addService.addNumber(intA, intB);
    return res;
  }
}
