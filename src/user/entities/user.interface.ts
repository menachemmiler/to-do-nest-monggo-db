import  {  Document } from "mongoose";
// import  mongoose from "@nestjs/mongoose";


export interface IUser extends Document{
    username: string;
    password: string;
    email: string;
}
