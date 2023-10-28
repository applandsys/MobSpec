export interface UserData extends LoginData{
    name: string;
}

export interface LoginData{
    email: string;
    password: string;
}