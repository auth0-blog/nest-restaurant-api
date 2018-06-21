import {
  Get,
  Post,
  Body,
  Controller,
} from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<string[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body('item') item: string) {
    this.itemsService.create(item);
  }
}
