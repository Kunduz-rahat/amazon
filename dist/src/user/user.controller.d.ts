import { UserService } from './user.service';
import { UserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
        email: string;
        password: string;
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        avatarPath: string;
        phone: string;
        orders: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.OrderStatus;
            userId: number;
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
        favorites: {
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
        }[];
        _count: {
            orders: number;
            reviews: number;
            favorites: number;
        };
    }>;
    updateProfile(id: number, dto: UserDto): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        avatarPath: string;
        phone: string;
    }>;
    toggleFavorite(id: number, productId: string): Promise<string>;
}
