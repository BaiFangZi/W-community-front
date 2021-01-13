// import {
//     getToken
// } from "@utils/auth"

const state = {
    token: '',
    role: '',
    get isLogin() {
        return localStorage.getItem('token')
    },
    // token: getToken()
}
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    CLEAR_TOKEN() {
        localStorage.removeItem('token')
    },
    GET_TOKEN() {
        return localStorage.getItem('token')
    },
    LOGIN(state) {
        state.isLogin = true
    },
    LOGOUT() {
        state.isLogin = false
    }
}

export default {
    namespaced: true,
    state,
    mutations,
}