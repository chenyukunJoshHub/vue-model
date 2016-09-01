import types from './mutation-types'

import {setOverall} from './actions/actions_dome'

//TODO: 当从一个模块中调用另一个模块的 action 时，或者调用同一模块中的另一个 action 时，切记，action 的第一个参数是 store 实例，因此应该将调用者 action 的第一个参数传递给被调用 action。


/* 主页 */
export const setMain = ({
    dispatch
}, _data) => {

    //this.$http.post('/xxx',{},(response)=>{
    //
    //},(response)=>{
    //
    //}),
    //.catch(function(response) {
    //    console.log(response)
    //})

    dispatch([types.DOME_MAIN], _data)
}

/* 离开 */
export const setLeave = ({
    dispatch
    }, _data) => {
    dispatch([types.DOME_LEAVE], _data)
}


/* 独立-全局 */
//export const setOverall = ({
//    dispatch
//    }, _data) => {
//    dispatch([types.DOME_OVERALL], _data)
//}

// TODO: 采用Default导出方式导出对象，该对象在import声明中将直接被分配给某个引用 (单个函数) import d from './module1.js';
// TODO: 采用export导出方式导出对象 (多个函数) import {Employee, getEmployee} from './module1.js';
export {
    setOverall
}


