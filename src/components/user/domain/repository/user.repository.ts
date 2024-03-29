import { IUser } from "../interface";

export interface UserRepository {
    createUser({ email, name, password, confirmed, token }: IUser): Promise<IUser>;
    findUserByEmail(email: string): Promise<IUser | null>;
    getAllUsers(): Promise<IUser[]>;
    validatePassword(email: string, formPassword: string): Promise<boolean>;
    findByToken(token: string): Promise<IUser | null>;
    confirmUser(id: string): Promise<boolean>;
    resetToken(userId: string): Promise<IUser>;
    changePassword(id: string, newPassword: string): Promise<boolean>
}