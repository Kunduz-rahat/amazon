import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ forwardRef(() => AuthModule),],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
