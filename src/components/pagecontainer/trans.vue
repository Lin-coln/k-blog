<template>
    <transition 
        :name="`transition-${transitionName}`"
        enter-active-class="page-transition-active"
        leave-active-class="page-transition-active"
        leave-class     ="page-transition-end"
        enter-to-class  ="page-transition-end">
        <router-view>
        </router-view>
    </transition>
</template>

<script>

import { mapState } from 'vuex'
export default {
    data(){
        return {
            transitionName: 'show',
        }
    },
    computed:{
        ...mapState({
            drawerbarListFocusIndex:state=>
                state.cpn.drawerbar.list.drawerbarListFocusIndex,
        })
    },
    watch: {
        drawerbarListFocusIndex(newVal, oldVal) {
            this.transitionName = newVal>oldVal ? 'up' :
                                  newVal<oldVal ? 'down' : 'show'
        },
    }
}
</script>

<style lang="scss" scoped>

.page-transition-active{
    transition: all 800ms ease-in-out;

    position: absolute;
    left: 0;
    top: 0;
}
.page-transition-end{
    opacity: 1;
}
.transition-show-enter,
.transition-show-leave-to{
    opacity: 0;
}
.transition-up-enter, .transition-down-leave-to{
    transform: translateY(100%);
    // transform: translateY(140%) scaleY(1.8);
    opacity: 0;
}
.transition-up-leave-to, .transition-down-enter{
    transform: translateY(-100%);
    // transform: translateY(-140%) scaleY(1.8);
    opacity: 0;
}

</style>