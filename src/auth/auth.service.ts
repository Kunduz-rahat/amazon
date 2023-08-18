import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma';
import {faker} from '@faker-js/faker'
import {hash} from 'argon2'
import { AuthDto } from './auth.dto';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async register(dto: AuthDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (oldUser)
      throw new BadRequestException('Такой пользователь уже существует');
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name:faker.name.firstName(),
        avatarPath:faker.image.avatar(),
        phone:faker.phone.number('+ 996 (###) ### ###'), 
        password: await hash(dto.password)
      }
    });
    return user
  }
  private async issueTokens(userId:number){
    const data = {id:userId}
    
  }
}
