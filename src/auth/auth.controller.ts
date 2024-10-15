import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Res() res: Response, @Body() loginData: LoginDTO) {
    try {
      const token = await this.authService.validatorUser(loginData);
      res.cookie('token', token);
      return res.status(HttpStatus.CREATED).json({ token });
    } catch (err) {
      console.error(err); // לוג השגיאה לקונסול
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Authentication failed',
        error: err.message,
      });
    }
  }
}
