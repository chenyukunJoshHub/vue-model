<template>
  <div class="hello">
    <h1>{{ msg }}--{{getMain.name}}--{{getMain.sex}}</h1>
      <button @click="onchange">全局</button>
  </div>
    <p>当前路径: {{$route.path}}</p>
    <p>当前路由参数: {{$route.params | json}}</p>
    <router-view></router-view>
</template>

<script>
    import {getMain} from '../vuex/getters'
    import {setOverall} from '../vuex/actions'

// TODO: 采用Default导出方式导出对象，该对象在import声明中将直接被分配给某个引用 (单个函数) import d from './module1.js';
// TODO: 采用export导出方式导出对象 (多个函数) import {Employee, getEmployee} from './module1.js';

export default {
    vuex: {
        actions: {
            setOverall:setOverall
        },
        getters: {
            getMain:getMain
        }
    },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello 主页!'
    }
  },
    methods:{
        'onchange' () {
            this.setOverall("全局变量")
            this.$router.go({ name: 'main', params: { id: 123 }})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
