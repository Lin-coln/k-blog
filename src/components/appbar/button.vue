<template>
    <transition name="fade">
        <div class="appbarbutton" 
            @click='handleClick'
            :style="style" 
            v-show="!drawerButtonClose">
            <i :class="icon"></i>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        icon: String,
        offset: { type:String, default: '0px' },
    },
    computed:{
        ...mapGetters([
            'drawerButtonClose',
            'appbarButtonSizeStr',
            'appbarPaddingStr',
            'appbarHeightStr',
        ]),
        style(){
            return {
                width: this.appbarButtonSizeStr,
                height: this.appbarButtonSizeStr,
                top: `calc((${this.appbarHeightStr} - ${this.appbarButtonSizeStr})/2)`,
                left: `calc(2 * ${this.appbarPaddingStr} + ${this.offset})`,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.appbarbutton{
    pointer-events: auto;
    transition: all 300ms ease-in-out;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.4em;
    font-weight: bold;
    // background-color: aquamarine;

    -webkit-tap-highlight-color:transparent;
}
</style>