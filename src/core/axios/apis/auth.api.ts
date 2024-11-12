import { AuthInfo } from '@/core/stores/authStore';
import { useAxios } from '../axios-factory';
import { APIResponse } from '../types/api.types';

const axios = useAxios();

export const requestAuth = (
    email: string,
    password: string,
): Promise<APIResponse<AuthInfo>> => {
    return axios.post(import.meta.env.VITE_API_AUTH, {
        email,
        password,
    });
};
