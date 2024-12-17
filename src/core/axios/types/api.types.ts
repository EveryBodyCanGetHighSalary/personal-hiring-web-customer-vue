export type APIResponse<T> = {
    data: T;
    message?: string;
    code: number;
};

export type APIErrorEntity = {
    code: number;
    message: string;
    errorType: ErrorType;
};

export enum ErrorType {
    SERVER_ERROR = 0,
    VALIDATE_ERROR = 1,
    AUTH_ERROR = 2,
}
