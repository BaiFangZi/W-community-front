import {
    getToken
} from "@utils/auth"

const state = {
    token: getToken()
}
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}