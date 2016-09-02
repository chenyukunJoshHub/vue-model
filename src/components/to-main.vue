<template>
  <div class="hello">
    <h1>{{ msg }}--{{getMain.name}}--{{getMain.sex}}</h1>
    <a href="javascript:void(0)" @click="onchange">vuex全局共享</a>
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
      msg: 'Hello 主页!'
    }
  },
    methods:{
        'onchange' () {
            this.setOverall("全局变量")
            this.$router.go({ name: 'main', params: { id: 123 }});
            alert('vuex修改成功,切换组件看看')
        }
    }
}
</script>
<style scoped>
h1 {
  color: #42b983;
}
</style>
