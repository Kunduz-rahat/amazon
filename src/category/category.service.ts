import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { generateSlug } from 'src/utils/generate-slug';
import { returnCategoryObject } from './return-category.object';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  // создаем категорию

  async create(dto: CategoryDto) {
    try {
      return this.prisma.category.create({
        data: {
          name: '',
          slug: '',
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  // получаем категорию по айдишнику
  async byId(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      select: returnCategoryObject,
    });
    if (!category) throw new Error('Category not found');
    return category;
  }
  // получаем по слагу
  async bySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: { slug },
      select: returnCategoryObject,
    });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
  // получаем все категории
  async getAll() {
    return this.prisma.category.findMany({ select: returnCategoryObject });
  }
  // обновляем категорию
  async update(id: number, dto: CategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: {
        name: dto.name,
        slug: generateSlug(dto.name),
      },
    });
  }
  // удаляем категорию
  async delete(id: number) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
  async create1(dto: CategoryDto) {
    // Получение старого юзера

    const oldCategory = await this.prisma.category.findUnique({
      where: {
        name: dto.name,
        slug:dto.slug
      },
    });

    if (oldCategory)
      throw new BadRequestException('Такая категория уже существует');

    // Создаем категорию, если его нет

    const category = await this.prisma.category.create({
      data: {
        name: dto.name,
        slug: dto.slug,
      },
    });
    return category;
  }
}
