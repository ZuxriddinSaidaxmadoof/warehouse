import { ID } from 'src/common/types/type';
import { CreateUserDto } from '../dto/create-user.dto';
import { RoleEnum } from 'src/common/enums/enum';

export class UserEntity {
  id: ID;
  login: string;
  password: string;
  full_name: string;
  role: RoleEnum;
  constructor(dto: CreateUserDto) {
    this.login = dto.login;
    this.password = dto.password;
    this.full_name = dto.fullName;
    this.role = dto.role;
  }
}
