import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './auth.dto';
import { hash } from 'argon2';
import { faker, th } from '@faker-js/faker';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async register(dto: AuthDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (oldUser) throw new BadRequestException('Такой пользователь существует');
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: faker.name.firstName(),
        avatarPath: faker.image.avatar(),
        phone: faker.phone.number('+996 (###) ### ###'),
        password: await hash(dto.password),
      },
    });
    return user;
  }
  private async issueTokins(userId: number) {
    const data = { id: userId };
    // const accessToken = this.get
  }
}
