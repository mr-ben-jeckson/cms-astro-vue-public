import type { App, Plugin } from 'vue'
import { store, addPersistence } from '../store/store'

const storePlugin: Plugin = {
    install: (app: App) => {
        addPersistence(store);
        app.provide('store', store);
    }
}

export default storePlugin;
