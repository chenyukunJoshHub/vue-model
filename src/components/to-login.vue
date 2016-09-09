<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <p>当前路径: {{$route.path}}</p>
      <p>当前路由参数: {{$route.params | json}}</p>

      <ul>
          <li v-for="item in jsonData" track-by="$index">{{item.username}}<li>
      </ul>

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
      postData:'',
      jsonData:[{
          id: 2,
          is_default: 1,
          postal_code: 333000,
          tel_number: 15606813797,
          username: '朱钧豪2',
          detail_info: '杭州市西湖区黄龙国际中心G座907',
          provice: '浙江省',
          city: '杭州市',
          county: '西湖区',
          national_code: 'CN',
      }, {
          id: 1,
          is_default: 0,
          postal_code: 333000,
          tel_number: 15606813797,
          username: '朱钧豪1',
          detail_info: '杭州市西湖区黄龙国际中心G座907',
          provice: '浙江省',
          city: '杭州市',
          county: '西湖区',
          national_code: 'CN',
      }]
    }
  },
    methods:{
       'onlogin' () {
            this.setMain({"name":"我是主页","sex":12});
            this.setLeave({"name":"我悄悄的走了", "sex":28});
            alert('vuex修改成功,切换组件看看')
       },
       'onloading' () {

           //  注意 使用 root  .get('a.html')   http://www.baidu.com/a.html
           //  注意 使用.get('/a.html')  root 会忽略   127.0.0.1/a.html

           //** 检索
           this.$http.post('/api/products',{"pageNo":1, "pageSize":5}).then((response) => {
               let Data = response.json()['data'];

               this.jsonData = Data['list']
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
.hello{
    font-size: 0.24rem;
}
</style>
