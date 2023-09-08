import { Injectable } from '@nestjs/common';

import { ProductDto } from './dto/product.dto';
import { PrismaService } from 'src/prisma.service';
import { returnProductObject } from './return-product.object';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
//  async create(dto: ProductDto) {
//     return 'This action adds a new product';
//   }

 async findAll() {
    return this.prisma.product.findMany({
      
      select: returnProductObject,
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
