import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CategoryDto } from './category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAll() {
    return this.categoryService.getAll();
  }

  @Get(':slug')
  async getBySlug(@Param('slug') slug: string) {
    return this.categoryService.bySlug(slug);
  }
  
  @Get(':id')
  @Auth()
  async getById(@Param('id') id: string) {
    return this.categoryService.byId(+id);
  }
  

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async update(
    @Param('categoryId') categoryId: string,
    @Body() dto: CategoryDto,
  ) {
    return this.categoryService.update(+categoryId, dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async create() {
    return this.categoryService.create();
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('categoryId') categoryId: string) {
    return this.categoryService.delete(+categoryId);
  }
}
