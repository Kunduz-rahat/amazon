import { Prisma } from '@prisma/client';

export const returnProductObject: Prisma.ProductSelect = {
  name: true,
  description: true,
  slug: true,
  images: true,
  price: true,
  id:true
};
