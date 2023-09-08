import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getBySlug(slug: string): Promise<{
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
    getById(id: string): Promise<{
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
    update(id: string, dto: CategoryDto): Promise<{
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
    delete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
}
