import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private readonly items: string[] = ['Pizza', 'Coke'];

  findAll(): string[] {
    return this.items;
  }

  create(item: string) {
    this.items.push(item);
  }
}
