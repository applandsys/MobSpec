export interface UserData extends LoginData{
    name: string;
}

export interface LoginData{
    email: string;
    password: string;
}

export interface AuthData{
    isLogin: boolean;
    token: string;
    userInfo: UserInfo
}

interface UserInfo{
    name: string;
    email: string;
    id: number;
}