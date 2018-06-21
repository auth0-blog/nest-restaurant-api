import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationMiddleware } from './common/authentication.middleware';
import * as express from 'express';

async function bootstrap() {
  const server = express();
  const auth = new AuthenticationMiddleware().resolve();
  server.post('/items', auth);
  server.post('/shopping-cart', auth);

  const app = await NestFactory.create(AppModule, server);
  await app.listen(3000);
}

bootstrap();
