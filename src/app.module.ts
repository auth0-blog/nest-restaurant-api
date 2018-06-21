import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [],
})
export class AppModule {}
