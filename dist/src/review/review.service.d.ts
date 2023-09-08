import { PrismaService } from 'src/prisma.service';
import { ReviewDto } from './dto/review.dto';
export declare class ReviewService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, dto: ReviewDto, productId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        rating: number;
        userId: number;
        productId: number;
    }>;
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        rating: number;
        userId: number;
        productId: number;
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
        product: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string;
            slug: string;
            images: string[];
            price: number;
            categoryId: number;
            userId: number;
        };
    }[]>;
    getAverageValueByProductId(productId: number): Promise<{
        rating: number;
    }>;
}
