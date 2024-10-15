import {
  BadRequestException,
  Body,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { IUser } from 'src/user/entities/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private UserModel: Model<IUser>,
    private jwtService: JwtService,
  ) {}
  async validatorUser(loginData: LoginDTO): Promise<any> {
    try {
      //find user
      const { password, username } = loginData;
      const resulte = await this.UserModel.findOne({ username: username });
      if (!resulte) throw new UnauthorizedException('user not found!');

      //compare
      const compare = await bcrypt.compare(password, resulte.password);
      //token or erorr
      if (!compare) throw new UnauthorizedException('password is incorrect!');
      const payload = {
        password,
        ...resulte,
      };
      const token = await this.jwtService.sign(payload);
      return token;
    } catch (err) {
      throw err;
    }
  }
}
