import { ID } from 'src/common/types/type';
import { UserEntity } from './entities/user.entity';
import { IUserRepository } from './interfaces/user.repository';
import { Postgres } from 'src/lib/pg';
import { RegisterDto } from '../auth/dto/auth.dto';

export class UserRepository extends Postgres implements IUserRepository {
  async findOneByLogin(login: string): Promise<UserEntity> {
    return await this.fetch<UserEntity, string>(
      'select * from users where login = $1',
      login,
    );
  }

  async findOneById(id: ID): Promise<UserEntity> {
    return await this.fetch<UserEntity, ID>(
      'select * from users where id = $1',
      id,
    );
  }

  async insert(dto: RegisterDto): Promise<UserEntity> {
    return await this.fetch<UserEntity, string>(
      "insert into users(login, password, full_name, role) values ($1, $2, $3, $4) returning *",
      dto.login,
      dto.password,
      dto.fullName,
      dto.role
    );
  }
}

