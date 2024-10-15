import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString, MinLength } from 'class-validator'; //מחלקה שאחראית על ולידציה לסוגי המידע(שהסוג שהתקבל תואם לסוג שמצופה)
export class CreateNoteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'the title is invalid' })
  title: string;

  @ApiProperty()
  @MinLength(6, { message: 'the content must to be at last 6 chars' })
  content: string;
}
