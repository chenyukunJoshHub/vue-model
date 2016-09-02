<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <p>当前路径: {{$route.path}}</p>
      <p>当前路由参数: {{$route.params | json}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '欢迎'
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
