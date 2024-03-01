import { ID } from 'src/common/types/type';
import { UserEntity } from '../entities/user.entity';
import { RegisterDto } from 'src/modules/auth/dto/auth.dto';

export interface IUserRepository {
  findOneById(id: ID): Promise<UserEntity | undefined>;
  findOneByLogin(login: string): Promise<UserEntity | undefined>;
  insert(dto: RegisterDto): Promise<UserEntity | undefined>;
}
