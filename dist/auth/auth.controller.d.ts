import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
