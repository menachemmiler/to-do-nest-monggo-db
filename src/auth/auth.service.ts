import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { IUser } from 'src/user/entities/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private UserModel: Model<IUser>) {}
  async validatorUser(loginData: LoginDTO) {
    try {
      //find user
      const { password, username } = loginData;
      const resulte = await this.UserModel.findOne({ username: username });
      if (!resulte) throw new NotFoundException('user not found!');

      //compare
      const compare = bcrypt.compare(password, resulte.password);

      //token or erorr
      return 'login a user';
    } catch (err) {
      throw new BadRequestException();
    }
  }
}
