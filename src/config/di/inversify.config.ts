import { AuthController } from '../../components/auth/controller/auth.controller';
import { AuthService } from '../../components/auth/service/auth.service';
import { AuthRepository } from '../../components/auth/repository/auth.repository';
import { UserController } from '../../components/user/infraestructure/controller/user.controller';
import { UserService } from '../../components/user/infraestructure/service/user.service';
import { UserRepository } from '../../components/user/domain/repository/user.repository';
import { Container } from 'inversify';
import { UserMongoRepository } from '../../components/user/infraestructure/repository/user-mongo.repository';

const container = new Container();

/* User */ 
container.bind<UserService>('UserService').to(UserService);
container.bind<UserController>('UserController').to(UserController);
container.bind<UserRepository>('UserRepository').to(UserMongoRepository);

/** Auth */
container.bind<AuthRepository>('AuthRepository').to(AuthRepository);
container.bind<AuthService>('AuthService').to(AuthService);
container.bind<AuthController>('AuthController').to(AuthController);

export { container };