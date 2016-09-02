<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <p>当前路径: {{$route.path}}</p>
      <p>当前路由参数: {{$route.params | json}}</p>
      返回数据:
      <pre>{{ nestedObject | json 4 }}</pre>
      post数据:
      <pre>{{ postData | json 4 }}</pre>
      <br>
      <a href="javascript:void(0)" @click="onlogin">vuex数据操作</a><br>
      <a href="javascript:void(0)" @click="onloading">http加载请求本地node模拟数据</a>
  </div>
  <router-view></router-view>
</template>

<script>

import {setMain, setLeave} from '../vuex/actions'

export default {
    vuex: {
        actions: {
            setMain: setMain,
            setLeave:setLeave
        },
        getters: {
            // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
            //counterValue: getCount
        }
    },
  data () {
    return {
      msg: 'Hello 登陆!',
      nestedObject:"",
      postData:''
    }
  },
    methods:{
       'onlogin' () {
            this.setMain({"name":"我是主页","sex":12});
            this.setLeave({"name":"我悄悄的走了", "sex":28});
            alert('vuex修改成功,切换组件看看')
       },
       'onloading' () {
           //** 检索
           this.$http.post('/api/products',{"pageNo":1, "pageSize":5}).then((response) => {
               let Data = response.json()['data'];
               this.nestedObject = JSON.stringify(Data['list'][0], null ,4);
               this.postData = JSON.stringify(Data['postdata'], null ,4);

           });
       }
    }

}
</script>
<style scoped>
h1 {
  color: #42b983;
}
</style>
