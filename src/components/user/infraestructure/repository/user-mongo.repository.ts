import { injectable } from "inversify";
import { UserRepository } from '../../domain/repository/user.repository';
import { IUser } from '../../domain/interface';
import User from "../../domain/model/user";
import { generateId } from '../../../../helpers/index';

@injectable()
export class UserMongoRepository implements UserRepository {

    constructor(){}
    
    async createUser({ email, name, password, confirmed, token }: IUser): Promise<IUser> {
        const user = new User({ email, name, password, confirmed, token });
        user.token = generateId();
        return (await user.save()).toObject();
    }
    async findUserByEmail(email: string): Promise<IUser | null> {
        const user = await User.findOne({email});
        return user ? user.toObject() : null;
    }
    async getAllUsers(): Promise<IUser[]> {
        return (await User.find()).map(user => user.toObject());
    }

    async validatePassword(email: string, formPassword: string): Promise<boolean> {
        const user = await User.findOne({email});
        return user ? await user.checkPassword(formPassword) : false
    }
}