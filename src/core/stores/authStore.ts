import { defineStore } from 'pinia';
import { requestAuth } from '../axios/apis/auth.api';

export type AuthInfo = {
    userName: string | null;
    token: string | undefined;
    roleType: 'customer' | 'admin' | 'company' | null;
};

export const useAuthStore = defineStore({
    id: 'authStore',
    state: (): AuthInfo => {
        return {
            userName: null,
            token: undefined,
            roleType: null,
        };
    },
    getters: {
        getUserName(): string | null {
            return this.userName;
        },
    },
    actions: {
        async requestAuth() {
            const result = await requestAuth('customer@qq.com', 'customer123');
            console.log(result);
        },
    },
});
