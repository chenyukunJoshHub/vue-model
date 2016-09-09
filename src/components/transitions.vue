<template>
  <div>
    <div>
        <div  class="cont animated" :transition="transition" v-if="show">{{transition}}-{{show}}</div>
        <div  class="cont2" transition="model" v-if="show2"></div>
    </div>
      <a href="javascript:void(0)" @click="anBounce">anBounce</a>
      <a href="javascript:void(0)" @click="anFlash">anFlash</a>
      <a href="javascript:void(0)" @click="anPulse">anPulse</a>
      <a href="javascript:void(0)" @click="anRubberBand">anRubberBand</a>
      <a href="javascript:void(0)" @click="anSwing">anSwing</a>
      <a href="javascript:void(0)" @click="anTada">anTada</a>
      <a href="javascript:void(0)" @click="anWobble">anWobble</a>
      <a href="javascript:void(0)" @click="anBounceIn">anBounceIn</a>
      <a href="javascript:void(0)" @click="anBounceInDown">anBounceInDown</a>
      <a href="javascript:void(0)" @click="anBounceInLeft">anBounceInLeft</a>
      <a href="javascript:void(0)" @click="anBounceInRight">anBounceInRight</a>
      <a href="javascript:void(0)" @click="anBounceInUp">anBounceInUp</a>
      <a href="javascript:void(0)" @click="anFadeInDown">anFadeInDown</a>
      <a href="javascript:void(0)" @click="anFadeInDownBig">anFadeInDownBig</a>
      <a href="javascript:void(0)" @click="anFadeInLeft">anFadeInLeft</a>
      <a href="javascript:void(0)" @click="anFadeInLeftBig">anFadeInLeftBig</a>
  </div>
</template>

<script>

export default {
    data () {
        return {
          show:false,
          show2:false,
          transition:'anBounce'
        }
    },
    methods:{
        'model' (){
            const _this = this;
            this.show = true;
            this.show2 = true;
            setTimeout(()=>{
                _this.show = false
                _this.show2 = false;
            },1200)
        },
        'anBounce'() {
            this.transition = "anBounce"
            this.model();
        },
        'anFlash'(){
            this.transition = "anFlash"
            this.model();
        },
        'anPulse'(){
            this.transition = "anPulse"
            this.model();
        },
        'anRubberBand'(){
            this.transition = "anRubberBand"
            this.model();
        },
        'anSwing'(){
            this.transition = "anSwing"
            this.model();
        },
        'anTada'(){
            this.transition = "anTada"
            this.model();
        },
        'anWobble'(){
            this.transition = "anWobble"
            this.model();
        },
        'anBounceIn'(){
            this.transition = "anBounceIn"
            this.model();
        },
        'anBounceInDown'(){
            this.transition = "anBounceInDown"
            this.model();
        },'anBounceInLeft'(){
            this.transition = "anBounceInLeft"
            this.model();
        },'anBounceInRight'(){
            this.transition = "anBounceInRight"
            this.model();
        },'anBounceInUp'(){
            this.transition = "anBounceInUp"
            this.model();
        },'anFadeInDown'(){
            this.transition = "anFadeInDown"
            this.model();
        },'anFadeInDownBig'(){
            this.transition = "anFadeInDownBig"
            this.model();
        },'anFadeInLeft'(){
            this.transition = "anFadeInLeft"
            this.model();
        },'anFadeInLeftBig'(){
            this.transition = "anFadeInLeftBig"
            this.model();
        }

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .cont{
        width: 80%;
        height: 1rem;
        background-color: #00b3ee;
        margin:0 auto;
    }
    .cont2{
        position: fixed;
        left: 0;
        top:0;
    }
    a{
        display: inline-block;
        padding:3px;
        margin: 3px;;
        border: 1px solid #ccc;
        font-size: 0.5rem;
        color:#333;
    }
</style>
