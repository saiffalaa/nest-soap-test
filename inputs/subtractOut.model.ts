import { ApiProperty } from '@nestjs/swagger';
export class subtractOut {
  @ApiProperty({
    default: 0,
    description: 'The result of the subtracting',
  })
  SubtractResult: number;
}
