import { ApiProperty } from '@nestjs/swagger';

export class Places {
  @ApiProperty()
  public latitude: string;
  @ApiProperty()
  public longitude: string;
  @ApiProperty()
  public radius: number;
  @ApiProperty()
  public typeOff: string;
}
