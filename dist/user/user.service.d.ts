import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';
import { Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number, selectObject?: Prisma.UserSelect): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
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
    toggleFavorite(productId: number, userId: number): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        avatarPath: string;
        phone: string;
    }>;
}
