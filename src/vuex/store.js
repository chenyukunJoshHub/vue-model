import types from './mutation-types'
import Vue from 'vue'
import Vuex from 'vuex'

/* 子全局store */
import OverAll from './modules/dome'


// 告诉 vue “使用” vuex
Vue.use(Vuex)

Vue.config.warnExpressionErrors = true; //数据为未出来时警告

// 创建一个对象来保存应用启动时的初始状态
const state = {
    // TODO: 放置初始状态
    main:{},
    leave:{}
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更函数

    // TODO: mutation 的第一个参数是当前的 state
    // TODO: 你可以在函数里修改 state

    /* 主页 */
    [types.DOME_MAIN] (state, amount) {
        state.main =  amount
    },

    /* 离开 */
    [types.DOME_LEAVE] (state, amount) {
        state.leave =  amount
        state.main.sex =  amount.sex
    }
}


export default new Vuex.Store({
    //  TODO: 整合初始状态和变更函数，我们就得到了我们所需的 store
    //  TODO: 至此，这个 store 就可以连接到我们的应用中
    state,
    mutations,
    modules:{
        OverAll
    }
})

