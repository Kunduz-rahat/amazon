import { ReviewService } from './review.service';
import { ReviewDto } from './dto/review.dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    createReview(id: number, dto: ReviewDto, productId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        rating: number;
        userId: number;
        productId: number;
    }>;
    getAll(): Promise<{
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
        text: string;
        rating: number;
        userId: number;
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
}
