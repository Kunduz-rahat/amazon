"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
const generate_slug_1 = require("../src/utils/generate-slug");
const random_number_1 = require("../src/utils/random-number");
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
                slug: (0, generate_slug_1.generateSlug)(productName),
                price: +faker_1.faker.commerce.price(10, 999, 0),
                images: Array.from({ length: (0, random_number_1.getRandomNumber)(2, 6) }).map(() => faker_1.faker.image.imageUrl()),
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
//# sourceMappingURL=seed.js.map