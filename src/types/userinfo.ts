export interface UserData extends LoginData{
    username: string;
}

export interface LoginData{
    email: string;
    password: string;
}