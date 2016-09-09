<template>
  <div class="hello">
      <h1>{{ msg }}--{{getLeave.name}} -- {{getOverall}}</h1>
      <p>当前路径: {{$route.path}}</p>
      <p>当前路由参数: {{$route.params | json}}</p>
  </div>
</template>

<script>
import { getLeave, getOverall} from '../vuex/getters'

export default {
    vuex: {
        actions: {
        },
        getters: {
            getLeave:getLeave,
            getOverall: getOverall
//            getoverall:({OverAll}) => OverAll.data
        }
    },
    data () {
        return {
          // note: changing this line won't causes changes
          // with hot-reload because the reloaded component
          // preserves its current state and we are modifying
          // its initial state.
          msg: 'Hello 离开!'
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
