"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
dotenv.config();
const prisma = new client_1.PrismaClient();
const createProducts = async (quantity) => {
    const products = [];
    for (let index = 0; index < quantity; index++) {
        const productName = faker_1.faker.commerce.productName();
        const categoryName = faker_1.faker.commerce.department();
        const product = await prisma.product.create({
            data: {
                name: productName,
                description: faker_1.faker.commerce.productDescription(),
                slug: faker_1.faker.helpers.slugify(productName),
                price: +faker_1.faker.number.int({ min: 10, max: 999 }),
                images: Array.from({
                    length: faker_1.faker.number.int({ min: 2, max: 6 }),
                }).map(() => faker_1.faker.image.url()),
                category: {
                    create: {
                        name: categoryName,
                        slug: faker_1.faker.helpers.slugify(categoryName),
                    },
                },
                reviews: {
                    create: [
                        {
                            rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1,
                                },
                            },
                        },
                        {
                            rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1,
                                },
                            },
                        },
                    ],
                },
            },
        });
        products.push(product);
        console.log(product.price);
    }
    console.log(`Created ${products.length} products`);
};
async function main() {
    console.log('Start seeding');
    await createProducts(5);
}
main()
    .catch((e) => console.log(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map