
export interface UserInfo {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface UserRegisterInfo {
    name?: string,
    email?: string,
    username?: string,
    password?: string
}