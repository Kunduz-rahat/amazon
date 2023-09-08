import {
  Controller,
  Get,
  Post,
  Body,

  Param,
 
  UsePipes,
  ValidationPipe,
  HttpCode,
  Put,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './dto/review.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('leave/:productId')
  createReview(
    @CurrentUser('id') id: number,
    @Body() dto: ReviewDto,
    @Param('productId') productId: string,
  ) {
    return this.reviewService.create(id, dto, +productId);
  }

  @Get()
  async getAll() {
    return this.reviewService.getAll();
  }

 
  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  // @Auth()
  // @Put(':id')
  // async update(@Param('id') id: string, @Body() dto: ReviewDto) {
  //   return this.reviewService.update(+id, dto);
  // }

}
