import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING), //מודל מובנה שאחראי על החיבור למסד הנתונים
    UserModule,
    AuthModule,
    NotesModule,
  ],
})
export class AppModule {}

