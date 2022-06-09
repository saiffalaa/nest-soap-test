import { ApiProperty } from '@nestjs/swagger';
export class divideOut {
  @ApiProperty({
    default: 1,
    description: 'The result of the dividing',
  })
  DivideResult: number;
}
