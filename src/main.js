//TODO: 创建根实例

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueAnimatedList from 'vue-animated-list'


import App from './App'
import Resource from  './components/utils/resource'
import Routes from  './routes_config'

//** Vue注入组件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueAnimatedList)

//** Vue.http.interceptors
Resource(function(data){
    console.log(data)
},function(data){
    if(!data){
        alert('404')
    }
})

//** 引入动画
require('./components/utils/transitions');

var router = new VueRouter({
    hashbang: false,
    history: true,
    root: '/',
    linkActiveClass:'cuurent',
    saveScrollPosition: true,
    transitionOnLoad: true,
    suppressTransitionError:false
});

Routes(router)

//开启vue调试功能
Vue.config.devtools = true;

//路由器会创建一个App实例，并挂载到#app对应的元素上
router.start(App, '#app')






















/* eslint-disable no-new */
//new Vue({//实列对象
//    el: 'body',
//    components: { App },
//    data () {
//        return {
//
//        }
//    },
//    http:{},

      //生命周期钩子
//    created () {
//          实例创建后调用
//          **在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 DOM 编译，$el 还不存在
//    },
//    beforeCompile () {
//          编译前
//          ** 在编译开始前调用。 ，$el  $template 存在
//      },
//    compiled () {编译后
//      //**在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档
//    },
//    ready () {//**在编译结束和 $el 第一次插入文档之后调用},
//    beforeDestroy(){销毁之前}
//    destroyed () {销毁},


      // 理由钩子
//    activate (done){
//        console.log('activate')
          //activate 钩子只作用于动态组件切换或静态组件初始化渲染的过程
//        done();
//    },
//    partials:{
//      'my':'<p>This is a partial!</p>'
//    },
//    computed:{

//    },
//    methods:{
//      //@click="reverseMessage(2, $event)"
        //alert(event.target.tagName)

        //@click="onclickAjax"
        //alert(event.target.tagName)
//   },
//    watch:{},
//    props:{},
//    events:{}
//})
