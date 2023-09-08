import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnReviewObject } from './return-review.object';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  // создаем новый отзыв

  async create(userId: number, dto: ReviewDto, productId: number) {
    try {
      return this.prisma.review.create({
        data: {
          ...dto,
          product: {
            connect: {
              id: productId,
            },
          },
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  // получаем все отзывы
  async getAll() {
    return this.prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
      select: returnReviewObject,
    });
  }

  // обновляем отзывы
  async update(id: number, dto: ReviewDto) {
    return this.prisma.review.update({
      where: { id },
      data: {
        text: dto.text,
        rating: dto.rating,
      },
    });
  }

  // получение средного отзыва
  async getAverageValueByProductId(productId: number) {
    return this.prisma.review
      .aggregate({
        where: { productId },
        _avg: { rating: true },
      })
      .then((data) => data._avg);
  }
}
