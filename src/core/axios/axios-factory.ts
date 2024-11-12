// import Modal from 'ant-design-vue/lib/modal/Modal';
import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';

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
    const errorCode = e?.status;
    switch (errorCode) {
        case 400:
            console.log(e.response?.data);
            break;
        case 500:
        default:
            break;
    }
    return Promise.reject(e);
};
