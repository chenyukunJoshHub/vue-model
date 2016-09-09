//TODO: 自定义动画
import Vue from 'vue'

//**** animate start  *****
//当前元素添加  class="animated"   transition="anBounce"
require('../../assets/css/animate.css')

Vue.transition('anBounce', {
    enterClass: 'bounce',
    leaveClass: 'fadeOut'
})

Vue.transition('anFlash', {
    enterClass: 'flash',
    leaveClass: 'fadeOut'
})

Vue.transition('anPulse', {
    enterClass: 'pulse',
    leaveClass: 'fadeOut'
})

Vue.transition('anRubberBand', {
    enterClass: 'rubberBand',
    leaveClass: 'fadeOut'
})

Vue.transition('anShake', {
    enterClass: 'shake',
    leaveClass: 'fadeOut'
})


Vue.transition('anSwing', {
    enterClass: 'swing',
    leaveClass: 'fadeOut'
})


Vue.transition('anTada', {
    enterClass: 'tada',
    leaveClass: 'fadeOut'
})

Vue.transition('anWobble', {
    enterClass: 'wobble',
    leaveClass: 'fadeOut'
})

Vue.transition('anBounceIn', {
    enterClass: 'bounceIn',
    leaveClass: 'bounceOut'
})

Vue.transition('anBounceInDown', {
    enterClass: 'bounceInDown',
    leaveClass: 'bounceOutDown'
})

Vue.transition('anBounceInLeft', {
    enterClass: 'bounceInLeft',
    leaveClass: 'bounceOutLeft'
})

Vue.transition('anBounceInRight', {
    enterClass: 'bounceInRight',
    leaveClass: 'bounceOutRight'
})

Vue.transition('anBounceInUp', {
    enterClass: 'bounceInUp',
    leaveClass: 'bounceOutUp'
})

Vue.transition('anFadeIn', {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
})

Vue.transition('anFadeInDown', {
    enterClass: 'fadeInDown',
    leaveClass: 'fadeOutDown'
})

Vue.transition('anFadeInDownBig', {
    enterClass: 'fadeInDownBig',
    leaveClass: 'fadeOutDownBig'
})

Vue.transition('anFadeInLeft', {
    enterClass: 'fadeInLeft',
    leaveClass: 'fadeOutLeft'
})

Vue.transition('anFadeInLeftBig', {
    enterClass: 'fadeInLeftBig',
    leaveClass: 'fadeOutLeftBig'
})


Vue.transition('anFadeInRight', {
    enterClass: 'fadeInRight',
    leaveClass: 'fadeOutRight'
})

Vue.transition('anFadeInRightBig', {
    enterClass: 'fadeInRightBig',
    leaveClass: 'fadeOutRightBig'
})

Vue.transition('anFadeInUp', {
    enterClass: 'fadeInUp',
    leaveClass: 'fadeOutUp'
})

Vue.transition('anFadeInUpBig', {
    enterClass: 'fadeInUpBig',
    leaveClass: 'fadeOutUpBig'
})

Vue.transition('anFlipInX', {
    enterClass: 'flipInX',
    leaveClass: 'flipOutX'
})

Vue.transition('anFlipInY', {
    enterClass: 'flipInY',
    leaveClass: 'flipOutY'
})

Vue.transition('anLightSpeedOut', {
    enterClass: 'lightSpeedIn',
    leaveClass: 'lightSpeedOut'
})

Vue.transition('anRollIn', {
    enterClass: 'rollIn',
    leaveClass: 'rollOut'
})

Vue.transition('anRotateIn', {
    enterClass: 'rotateIn',
    leaveClass: 'rotateOut'
})

Vue.transition('anRotateInDownLeft', {
    enterClass: 'rotateInDownLeft',
    leaveClass: 'rotateOutDownLeft'
})

Vue.transition('anRotateInDownRight', {
    enterClass: 'rotateInDownRight',
    leaveClass: 'rotateOutDownRight'
})

Vue.transition('anRotateInUpLeft', {
    enterClass: 'rotateInUpLeft',
    leaveClass: 'rotateOutUpLeft'
})

Vue.transition('anRotateInUpRight', {
    enterClass: 'rotateInUpRight',
    leaveClass: 'rotateOutUpRight'
})

Vue.transition('anSlideInDown', {
    enterClass: 'slideInDown',
    leaveClass: 'slideOutDown'
})

Vue.transition('anSlideInDown', {
    enterClass: 'slideInDown',
    leaveClass: 'slideOutDown'
})

Vue.transition('anSlideInLeft', {
    enterClass: 'slideInLeft',
    leaveClass: 'slideOutLeft'
})

Vue.transition('anSlideInRight', {
    enterClass: 'slideInRight',
    leaveClass: 'slideOutRight'
})
//**** animate end  *****

//**** css start ******
require('../../assets/css/transitions.css')
//**** css end ****


//**** transitions start  *****
Vue.transition('expand', {
    beforeEnter: function (el) {
        el.textContent = 'beforeEnter'
    },
    enter: function (el) {
        el.textContent = 'enter'
    },
    afterEnter: function (el) {
        el.textContent = 'afterEnter'
    },
    enterCancelled: function (el) {
        // handle cancellation
    },

    beforeLeave: function (el) {
        el.textContent = 'beforeLeave'
    },
    leave: function (el) {
        el.textContent = 'leave'
    },
    afterLeave: function (el) {
        el.textContent = 'afterLeave'
    },
    leaveCancelled: function (el) {
        // handle cancellation
    }
})

Vue.transition('fade', {
    css: false,
    enter: function (el, done) {
        // 元素已被插入 DOM
        // 在动画结束后调用 done
        $(el)
            .css('opacity', 0)
            .animate({ opacity: 1 }, 1000, done)
    },
    enterCancelled: function (el) {
        $(el).stop()
    },
    leave: function (el, done) {
        // 与 enter 相同
        $(el).animate({ opacity: 0 }, 1000, done)
    },
    leaveCancelled: function (el) {
        $(el).stop()
    }
})
//**** transitions end  *****