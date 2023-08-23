import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './auth.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(dto: AuthDto): Promise<{
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
