import mongoose, { Schema } from 'mongoose';
import { IUser } from './user.interface';

export const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, 'username is requird'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is requird'],
    },
    email: {
      type: String,
      required: [true, 'email is requird'],
    },
  },
  { timestamps: true },//מורה למונגו לייצר תיעוד של תאריך היצירה וכן תאריך העדכון
);

