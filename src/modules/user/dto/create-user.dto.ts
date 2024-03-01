import { RoleEnum } from 'src/common/enums/enum';

export class CreateUserDto {
  login: string;
  password: string;
  fullName: string;
  role: RoleEnum;
}
