import { Document } from "mongoose";

export interface IUser {
    name: string;
    password: string;
    email: string;
    token: string;
    confirmed: boolean;
    [key: string]: any
}

export interface IUserDocument extends IUser, Document {
    checkPassword: (formPassword: string) => Promise<boolean>;
}