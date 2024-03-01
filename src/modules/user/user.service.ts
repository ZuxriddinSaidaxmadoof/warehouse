import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IUserService } from './interfaces/user.service';
import { ResData } from 'src/lib/resData';
import { UserEntity } from './entities/user.entity';
import { ID } from 'src/common/types/type';
import { IUserRepository } from './interfaces/user.repository';
import { UserNotFoundException } from './exception/user.exception';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async findOneByLogin(
    login: string,
  ): Promise<ResData<UserEntity | undefined>> {
    const foundUser = await this.userRepository.findOneByLogin(login);

    const response = new ResData('success', 200, foundUser);

    if (!foundUser) {
      response.message = 'User not found';
      response.statusCode = HttpStatus.NOT_FOUND;
    }

    return response;
  }

  async findOneById(id: ID): Promise<ResData<UserEntity>> {
    const foundUser = await this.userRepository.findOneById(id);

    if (!foundUser) {
      throw new UserNotFoundException();
    }

    return new ResData<UserEntity>('success', 200, foundUser);
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
