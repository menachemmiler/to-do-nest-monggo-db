import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; //ייבאתי יידנית
import { IUser } from './entities/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  //מקבל הזרקה של המודל של טבלת יוזר
  constructor(@InjectModel('User') private UserModel: Model<IUser>) {}

  async register(createUserDto: CreateUserDto) {
    try {
      const { password } = createUserDto;
      const hashPas = await bcrypt.hash(password, 10);
      const newUser = this.UserModel.create({
        ...createUserDto,
        password: hashPas,
      });
      return newUser;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async profile() {
    try {
      return 'profile';
    } catch (err) {
      throw new BadRequestException();
    }
  }



  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
