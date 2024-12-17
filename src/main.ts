import { createApp } from 'vue';
import './style.css';
import App from '@/App.vue';
import {
    injectErrorHandler,
    injectPinia,
    injectRouter,
} from '@/shared/setup-application';

const app = createApp(App);

injectErrorHandler(app);
injectPinia(app);
injectRouter(app);
app.mount('#app');
