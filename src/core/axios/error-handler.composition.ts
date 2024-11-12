export const useApiErrorHandler = async (api: Promise<any>) => {
    try {
        await api;
    } catch (error) {
        console.log(error);
    }
};
