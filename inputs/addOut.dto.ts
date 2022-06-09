import { ApiProperty } from '@nestjs/swagger';
export class addOut {
  @ApiProperty({
    default: 0,
    description: 'The result of the adding',
  })
  addResult: number;
}
