import { createStore } from 'vuex';
import type { Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import type { State } from './state';

// Define getters
const getters = {
    // user: (state: State) => state.user,
    // token: (state: State) => state.token,
};

// Create the store
export const store = createStore<State>({
    state,
    mutations,
    actions,
    getters,
});

// Function to add persistence
export function addPersistence(store: Store<State>) {
    if (typeof window !== 'undefined') {
        createPersistedState({
            paths: ['token', 'user'],
            storage: window.sessionStorage
        })(store);
        console.log('Persistence setup complete');
    } else {
        console.warn('Session storage is not available in this environment');
    }
}
