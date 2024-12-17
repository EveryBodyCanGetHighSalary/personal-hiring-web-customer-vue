import { ComponentPublicInstance, Ref, ref } from 'vue';
import { useApiLoadingStore } from '../stores/apiLoadingStore';
import { ErrorType } from './types/api.types';

type ApiHandlerType = (
    api: Promise<any>,
    needsLoading?: boolean,
) => [() => Promise<any>, Ref<Boolean>];

export const useApiHandler: ApiHandlerType = (
    api: Promise<any>,
    needsLoading: boolean = true,
) => {
    const loading = ref(false);
    const execApi = async () => {
        loading.value = true;
        const apiLoadingStore = useApiLoadingStore();
        if (needsLoading) {
            apiLoadingStore.insertApi();
        }
        let apiResult: any = undefined;
        api.then((result) => (apiResult = result))
            .catch((error) => {
                if (error.errorType === ErrorType.VALIDATE_ERROR) {
                    console.log('validate fail');
                } else {
                    throw error;
                }
            })
            .finally(() => {
                needsLoading && apiLoadingStore.removeApi();
                loading.value = false;
            });
        return apiResult;
    };
    return [execApi, loading];
};

export const globalErrorHandler: (
    err: unknown,
    instance: ComponentPublicInstance | null,
    info: string,
) => void = (error, instance, info) => {
    console.log('globalErrorHandler', error);
};

export const initNativeErrorHandler = () => {
    window.addEventListener('error', (event) => {
        console.warn('error');
        console.warn(event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
        console.warn('unhandledrejection');
        console.warn(event.reason);
    });
};
