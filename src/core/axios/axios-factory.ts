// import Modal from 'ant-design-vue/lib/modal/Modal';
import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';
import { APIErrorEntity, ErrorType } from './types/api.types';

export const useAxios = (endPoint?: string, timeout = 30000) => {
    const instance = axios.create({
        baseURL: endPoint ?? import.meta.env.VITE_API_ENDPOINT,
        timeout,
    });
    instance.interceptors.request.use(requestInterceptors);
    instance.interceptors.response.use(
        responseInterceptors,
        responseErrorHandler,
    );
    return instance;
};

/**
 * request拦截器
 *
 *
 * @param {InternalAxiosRequestConfig<any>} request
 * @return {*}
 */
const requestInterceptors = (request: InternalAxiosRequestConfig<any>) => {
    return request;
};

const responseInterceptors = (response: AxiosResponse) => {
    return response.data;
};

const responseErrorHandler = (e: AxiosError) => {
    const apiError = e?.response?.data as APIErrorEntity;
    const errorCode = apiError.code;
    switch (errorCode) {
        case 400:
            apiError.errorType = ErrorType.VALIDATE_ERROR;
            break;
        case 401:
            apiError.errorType = ErrorType.AUTH_ERROR;
            break;
        case 500:
            apiError.errorType = ErrorType.SERVER_ERROR;
            break;
    }
    return Promise.reject(apiError);
};
