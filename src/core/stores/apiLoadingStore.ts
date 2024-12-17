import { defineStore } from 'pinia';

export type APILoadingEntity = {
    apiExecList: Array<any>;
};

export const useApiLoadingStore = defineStore({
    id: 'apiLoadingStore',
    state: (): APILoadingEntity => {
        return {
            apiExecList: [],
        };
    },
    getters: {
        isLoading(): boolean {
            return !!this.apiExecList.length;
        },
    },
    actions: {
        insertApi() {
            this.apiExecList.push();
        },
        removeApi() {
            this.apiExecList = this.apiExecList.filter((item) => item === 1);
        },
    },
});
