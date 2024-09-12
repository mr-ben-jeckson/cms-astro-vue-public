import { createStore } from 'vuex';
import type { Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// Define your state types
interface State {
    token: string | null;
    user: {} | null;
}

// Define the initial state
const state: State = {
    token: null,
    user: null,
};

// Define mutations
const mutations = {
    setUser(state: State, user: {}) {
        state.user = user;
    },
    setToken(state: State, token: string) {
        state.token = token;
    },
    removeToken(state: State) {
        state.token = null;
    }
};

// Define actions
const actions = {
    updateUser({ commit }: { commit: Function }, user: {}) {
        commit('setUser', user);
    },
    updateToken({ commit }: { commit: Function }, token: string) {
        commit('setToken', token);
    },
    logout({ commit }: { commit: Function }) {
        commit('removeToken');
    }
};

// Define getters
const getters = {
    user: (state: State) => state.user,
    token: (state: State) => state.token,
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
