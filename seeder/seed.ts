import { faker } from '@faker-js/faker';
import { PrismaClient, Product } from '@prisma/client';
import * as dotenv from 'dotenv';
import { generateSlug } from 'src/utils/generate-slug';
import { getRandomNumber } from 'src/utils/random-number';
dotenv.config();

const prisma = new PrismaClient();

// Генерация продуктов

const createProducts = async (quantity: number) => {
  const products: Product[] = [];
  for (let index = 0; index < quantity; index++) {
    const productName = faker.commerce.productName();
    const categoryName = faker.commerce.department();
    const product = await prisma.product.create({
      data: {
        name: productName,
        description: faker.commerce.productDescription(),
        slug: generateSlug(productName),
        price: +faker.commerce.price(10, 999, 0),
        images: Array.from({ length: getRandomNumber(2, 6) }).map(() =>
          faker.image.imageUrl(),
        ),
      },
    });
  }
  console.log(`Created ${products.length} products`);
};

async function main() {
  console.log('Start seeding');
  await createProducts(10);
}

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
