import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { NotesController } from './notes/notes.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UserController, NotesController, AuthController],
  controllers: [],
  providers: [],
})
export class AppModule {}
