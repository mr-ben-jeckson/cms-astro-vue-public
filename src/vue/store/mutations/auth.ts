import type { State } from '../../store/state';

export function setUser(state: State, user: {}){
    state.user = user;
}

export function setToken(state: State, token: string){
    localStorage.setItem("TOKEN", token);
    state.token = token;
}

export function removeToken(state: State){
    state.token = null;
    localStorage.removeItem("TOKEN");
    window.location.href = "/";
}