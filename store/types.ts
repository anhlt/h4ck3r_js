
export interface UserInfo {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface UserRegisterInfo {
    nickname?: string,
    email?: string,
    username?: string,
    password?: string
}