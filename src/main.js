//TODO: 创建根实例

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import Resource from  './components/utils/resource'
import Routes from  './routes_config'

//** Vue注入组件
Vue.use(VueResource)
Vue.use(VueRouter)

//** Vue.http.interceptors
Resource(function(data){
    console.log(data)
},function(data){
    if(!data){
        alert('404')
    }
})

export var router = new VueRouter({
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
//new Vue({
//    el: 'body',
//    components: { App },
//    data () {
//        return {
//
//        }
//    },
//    http:{},
//    created () {},
//    beforeCompile () {},
//    compiled () {},
//    ready () {},
//    destroyed () {},
//    activate (done){
//        console.log('activate')
//        done();
//    },
//    computed:{},
//    methods:{},
//    watch:{},
//    props:{},
//    events:{}
//})
