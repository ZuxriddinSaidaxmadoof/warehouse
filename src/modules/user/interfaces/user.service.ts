import { ID } from 'src/common/types/type';
import { ResData } from 'src/lib/resData';
import { UserEntity } from '../entities/user.entity';

export interface IUserService {
  findOneById(id: ID): Promise<ResData<UserEntity>>;
  findOneByLogin(login: string): Promise<ResData<UserEntity | undefined>>;
}
