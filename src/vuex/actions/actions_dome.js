import types from '../mutation-types'

// TODO: const 声明创建一个只读的常量。这不意味着常量指向的值不可变，而是变量标识符的值只能赋值一次, (类型不能变了,只能负值一次)
// TODO: const 对象属性并不在保护的范围内，可以修改对象属性
/* 独立-全局 */
export const setOverall = ({
    dispatch
    }, _data) => {
    dispatch([types.DOME_OVERALL], _data)
}

