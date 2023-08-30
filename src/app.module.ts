import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(),
    AuthModule, CartModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
