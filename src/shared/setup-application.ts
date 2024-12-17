import {
    globalErrorHandler,
    initNativeErrorHandler,
} from '@/core/axios/error-handler.composition';
import { routes } from '@/core/routes/routes';
import { createPinia } from 'pinia';
import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

export const injectPinia = (app: App<Element>): void => {
    const pinia = createPinia();
    app.use(pinia);
};

export const injectRouter = (app: App<Element>): void => {
    const router = createRouter({
        history: createWebHistory('/home/'),
        routes,
    });
    app.use(router);
};

export const injectErrorHandler = (app: App<Element>): void => {
    app.config.errorHandler = globalErrorHandler;
    initNativeErrorHandler();
};
