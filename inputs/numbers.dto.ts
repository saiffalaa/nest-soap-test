import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { Request } from 'express';
export class schema {
  // @ApiProperty({
  //   default: 1,
  //   description: 'First number',
  // })
  @IsInt()
  @IsNotEmpty()
  intA: number;
  // @ApiProperty({
  //   default: 1,
  //   description: 'Second Number',
  // })
  @IsNotEmpty()
  @IsInt()
  intB: number;
}
