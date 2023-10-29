import { defineStore } from "pinia";
import {AuthData} from "@/types/userinfo";



export const useAuth = defineStore('all-brand', {
    state: ()  => ({
        isLogin : true,
        token : '',
        userInfo: {}
    }),
    actions: {
        async setAuthInfo(payload: AuthData){
            this.isLogin = payload.isLogin;
            this.token = payload.token;
            this.userInfo = payload.userInfo;
        }
    }
})