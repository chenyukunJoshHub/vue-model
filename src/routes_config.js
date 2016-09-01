
import Hello from './components/Hello.vue'
import ToLogin from './components/to-login.vue'
import ToMain from './components/to-main.vue'
import ToLeave from './components/to-leave.vue'

module.exports = function(router){

//** 全局 路由 钩子
    router.beforeEach(function (transition) {
        return true
    })

//定义路由规则
    router.map ({
        '/hello': {
            title: 'hello',
            name:'hello',
            component: Hello
        },
        '/login': {
            title: '登陆',
            name:'login',
            component: ToLogin,
            subRoutes: {
                '/': {
                    // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
                    // 为了简便，这里使用了一个组件的定义
                    component: {
                        template: '<p>Default sub view for Foo</p>'
                    }
                },
            }
        },
        '/main/:id': {
            title: '主页',
            name:'main',
            component: ToMain,
            subRoutes: {
                '/josh/:sid': {
                    // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
                    // 为了简便，这里使用了一个组件的定义
                    component: {
                        template: '<p>Default sub view for Foo</p>'
                    }
                },
            }
        },
        '/leave': {
            title: '退出',
            name:'leave',
            component: function(resolve) {
                require(['./components/to-leave.vue'], resolve)
            }
        }
    })

    router.afterEach(function (transition) {
        document.title=transition.to.title
    })

//为路由定义全局重定向规则，将任意未匹配路径重定向到/home页面
//router.redirect({
//    '*': '/hello'
//})

}
