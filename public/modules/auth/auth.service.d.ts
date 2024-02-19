export declare class AuthService {
    static signIn(email: string, password: string): Promise<string>;
    static signUp(email: string, password: string): Promise<{
        id: string;
        email: string;
        password: string;
        salt: string;
    }>;
}
