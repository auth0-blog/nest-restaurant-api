import {
  Get,
  Post,
  Controller,
} from '@nestjs/common';

@Controller('items')
export class ItemsController {

  @Get()
  async findAll(): Promise<string[]> {
    return ['Pizza', 'Coke'];
  }

  @Post()
  async create() {
    return 'Not yet implemented';
  }
}
