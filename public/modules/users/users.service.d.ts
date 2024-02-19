import { User } from '@prisma/client';
export declare const UsersService: {
    updateMe: (user: User, updateMeDto: {
        fullName: string;
        isVerified: boolean;
    }) => Promise<{
        id: string;
        email: string;
    }>;
};
