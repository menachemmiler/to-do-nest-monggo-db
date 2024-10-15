import { ApiProperty } from '@nestjs/swagger';

import { IsString, MinLength } from 'class-validator'; //מחלקה שאחראית על ולידציה לסוגי המידע(שהסוג שהתקבל תואם לסוג שמצופה)
export class LoginDTO {
  @ApiProperty()
  @IsString({ message: 'the username is invalid' })
  username: string;
  
  @ApiProperty()
  @MinLength(6, { message: 'the password must to be at last 6 chars' })
  password: string;
}
