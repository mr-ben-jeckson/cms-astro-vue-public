import { ref, provide, inject } from 'vue';
import type { InjectionKey, Ref } from 'vue';

interface AppState {
    user: Ref<string | null>;
    setUser: (user: string | null) => void;
}

// Define the InjectionKey with type-only import
const AppStateKey: InjectionKey<AppState> = Symbol('AppState') as InjectionKey<AppState>;

export function provideAppState() {
    const user = ref<string | null>(null);

    const setUser = (newUser: string | null) => {
        user.value = newUser;
    };

    provide(AppStateKey, { user, setUser });
}

export function useAppState() {
    const context = inject(AppStateKey);
    if (!context) {
        throw new Error('useAppState must be used within a provider');
    }
    return context;
}
