import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [],
  controllers: [ItemsController, ShoppingCartController],
  providers: [ItemsService],
})
export class AppModule {}
