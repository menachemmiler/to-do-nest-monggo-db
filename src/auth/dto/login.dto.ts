import { IsString, MinLength } from 'class-validator'; //מחלקה שאחראית על ולידציה לסוגי המידע(שהסוג שהתקבל תואם לסוג שמצופה)
export class LoginDTO {
  @IsString({ message: 'the username is invalid' })
  username: string;
  @MinLength(6, { message: 'the password must to be at last 6 chars' })
  password: string;
}
