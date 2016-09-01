import types from '../mutation-types'
const state = {
    data:"全局",
}

const mutations = {
    [types.DOME_OVERALL](state, data) {
        state.data = data
    },
}

export default {
    state,
    mutations
}