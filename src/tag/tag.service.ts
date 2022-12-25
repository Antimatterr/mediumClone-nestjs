import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    // bussiness logic
    return ['coffee', 'Tea'];
  }
}
