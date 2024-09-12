import type { App } from 'vue';
import { store } from '@/vue/store/store';

export default (app: App) => {
    app.use(store);
};
