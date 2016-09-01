// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
export const getMain = state => state.main

export const getLeave = state => state.leave

export const getOverall = state => {
    return state.OverAll.data
    //return state.messages.filter(message => {
    //    return message.threadID === state.currentThreadID
    //})

    //return state.messages.map(message => {
    //    return message.threadID === state.currentThreadID
    //})
}