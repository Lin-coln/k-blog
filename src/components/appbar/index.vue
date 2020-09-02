<template>
    <div>
        <transition name="delayfade">
            <div 
                class="appbar-shadow"
                v-show="appbarSolid" 
                :style='shadowStyle'></div>
        </transition>
        <div class='appbar' :style='style'>
            <drawerbutton/>
            <mtitle/>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import mtitle from './title'
import drawerbutton from './drawerbutton'
export default {
    components: { mtitle, drawerbutton },
    computed:{
        ...mapState({
            appbarHeight: state=>state.cpn.appbar.appbarHeight,
            appbarSolid: state=>state.cpn.appbar.appbarSolid,
        }),
        ...mapGetters([
            'drawerbarWidthStr',

            'appbarWidthStr',
            'appbarHeightStr',
            'appbarHeightWidthExpandStr',
            'appbarColor',
            'appbarContentColor',
        ]),
        shadowStyle(){
            return {
                height: this.appbarHeightStr,
            }
        },
        style(){
            return {
                width: this.appbarWidthStr,
                height: this.appbarHeightWidthExpandStr,
                backgroundColor: this.appbarColor,
                color:  this.appbarContentColor,
                pointerEvents: this.appbarSolid?'auto':'none',
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.appbar-shadow{
    pointer-events: none;
    width: 100vw;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
}
.appbar{
    position: fixed;
    z-index: 3;
    right: 0;
    top: 0;
    transition: 
        height 300ms ease-in-out,
        background-color 300ms ease-in-out; 
}

.delayfade-enter-active{
    transition: opacity 300ms ease-in-out 300ms;
}
.delayfade-enter, .delayfade-leave-to{
    opacity: 0;
}
.delayfade-leave, .delayfade-enter-to{
    opacity: 1;
}
</style>