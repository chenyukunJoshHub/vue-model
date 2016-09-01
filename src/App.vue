<template>
<div id="josh">
    <p>
        <!-- 使用指令 v-link 进行导航。 -->
        <a v-link="{ path: '/hello', replace: true }">Go to hello</a>
        <a v-link="{ name: 'login', activeClass: 'custom-active-class'}">Go to login</a>
        <a v-link="{ path: '/main/1/josh/2' }">Go to main</a>
        <!--<a v-link="{ name: 'main', params: { id: 123}}">Go to main</a>-->
        <a v-link="{ path: '/leave?user=josh'}">Go to leave</a>
  </p>

  <div>
      <tabbar>
          <tabbar-item link="http://www.baidu.com">
              <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
              <span slot="label">Wechat</span>
          </tabbar-item>
          <tabbar-item show-dot>
              <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
              <span slot="label">Message</span>
          </tabbar-item>
          <tabbar-item selected>
              <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
              <span slot="label">Explore</span>
          </tabbar-item>
          <tabbar-item >
              <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
              <span slot="label">News</span>
          </tabbar-item>
      </tabbar>
  </div>

  <div>
      <group>
          <cell title="vue" value="cool"></cell>
          <cell title="vue" value="cool"></cell>
      </group>
  </div>

  <router-view></router-view>

</div>
</template>
<script>

//TODO: 创建根组件
import store from './vuex/store' // import 我们刚刚创建的 store


//** vux
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'
import { Tabbar, TabbarItem } from 'vux-components/tabbar'

export default {
store,
components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem
},
ready () {
    console.log(this.$route.path)
    console.log(this.$route.params)
    console.log(this.$route.query)
    console.log(this.$route.router)
    console.log(this.$route.matched)
    console.log(this.$route.name)
},

// *** 路由 钩子
route: {
    canReuse: function (transition) {
        //            transition.to
        //
        //            一个代表将要切换到的路径的路由对象。
        //
        //            transition.from
        //
        //            一个代表当前路径的路由对象。
        //
        //            transition.next()
        //
        //            调用此函数处理切换过程的下一步。
        //
        //            transition.abort([reason])
        //
        //            调用此函数来终止或者拒绝此次切换。
        //
        //            transition.redirect(path)
        //
        //            取消当前切换并重定向到另一个路由。
        //

        transition.next()
    },
    canDeactivate: function (transition) {
        setTimeout(transition.next, 0)
        //transition.next()
    },
    canActivate: function (transition) {
        //当在钩子函数中返回一个 Promise 时，系统会在该 Promise 被 resolve 之后自动调用transition.next。
        return true //( == transition.next() )
    },
    deactivate: function (transition) {
        transition.next()
    },
    activate ({ next }){
        // es6
        next();
    }
}
}
</script>

<style>
@import '~vux/dist/vux.css';
</style>
