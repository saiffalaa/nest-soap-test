import { ApiProperty } from '@nestjs/swagger';
export class multiplyOut {
  @ApiProperty({
    default: 1,
    description: 'The result of the multiplying',
  })
  MultiplyResult: number;
}
