import { HttpException, HttpStatus } from '@nestjs/common';

export class CategoryNotFoundException extends HttpException {
  constructor() {
    super('Category not found', HttpStatus.NOT_FOUND);
  }
}

export class CategoryAlreadyExistException extends HttpException {
  constructor() {
    super('Category already exist', HttpStatus.BAD_REQUEST);
  }
}
