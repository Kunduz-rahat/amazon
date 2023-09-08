import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    byId(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            products: number;
        };
        products: {
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
    }>;
    bySlug(slug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            products: number;
        };
        products: {
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
    }>;
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            products: number;
        };
        products: {
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
    }[]>;
    update(id: number, dto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    create1(dto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
}
