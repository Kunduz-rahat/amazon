import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<{
        name: string;
        slug: string;
        price: number;
        id: number;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        images: string[];
        categoryId: number;
        userId: number;
        orderItems: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            text: string;
            rating: number;
            userId: number;
            productId: number;
        }[];
        category: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            email: string;
            name: string;
            password: string;
            createdAt: Date;
            updatedAt: Date;
            avatarPath: string;
            phone: string;
        };
        _count: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }[]>;
}
