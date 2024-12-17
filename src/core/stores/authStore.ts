import { defineStore } from 'pinia';
import { requestAuth } from '../axios/apis/auth.api';

export type AuthInfo = {
    userName: string | null;
    token: string | undefined;
    roleType: 'customer' | 'admin' | 'company' | null;
    isLogin: boolean;
};

export const useAuthStore = defineStore({
    id: 'authStore',
    state: (): AuthInfo => {
        return {
            userName: null,
            token: undefined,
            roleType: null,
            isLogin: false,
        };
    },
    getters: {
        getUserName(): string | null {
            return this.userName;
        },
    },
    actions: {
        async requestAuth() {
            await requestAuth('customer1@qq.com', 'customer123');
        },
    },
});
