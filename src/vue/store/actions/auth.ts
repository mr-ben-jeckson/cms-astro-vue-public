import axiosClient from "../../../http/axiosClient";

export const login = ({ commit }: { commit: Function }, user: { email: string, password: string }) => {
    return axiosClient.post('/auth/login', user)
        .then(({ data }) => {
            const accessToken = data.result.accessToken
            commit('setToken', accessToken);
        });
}

export const logout = ({ commit }: { commit: Function }) => {
    commit('removeToken');
}