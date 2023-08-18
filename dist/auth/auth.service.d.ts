import { PrismaService } from 'prisma';
import { AuthDto } from './auth.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(dto: AuthDto): Promise<any>;
    private issueTokens;
}
