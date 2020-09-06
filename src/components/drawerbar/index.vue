<template>
    <div class='drawerbar' id="drawerbar" :style='style'>
        <profile/>
        <div class="drawerbarcontent" :style="contentStyle">
            <list/>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import list from './list'
import profile from './profile'
export default {
    components:{
        list, profile
    },
    computed:{
        ...mapState({
            drawerbarWidth: state=>state.cpn.drawerbar.drawerbarWidth,
            drawerbarClose: state=>state.cpn.drawerbar.drawerbarClose,
        }),
        ...mapGetters([
            'appbarHeightStr',
            'drawerbarWidthStr',
            'drawerbarColor',
            'drawerbarZIndex',
            'isSmallScreen',
        ]),
        style(){
            return {
                width: this.drawerbarWidthStr,
                backgroundColor: this.drawerbarColor,
                zIndex: this.drawerbarZIndex,
                transform: `translateX(${this.drawerbarClose?'-100%':0})`,
                boxShadow:  this.drawerbarClose
                            ? `0 0 10px rgba(0,0,0,0)`
                            : `0 0 10px rgba(0,0,0,0.4)`
            }
        },
        contentStyle(){
            return {
                height: `calc(100% - ${this.appbarHeightStr})`
            }
        },
    },
    watch:{
        isSmallScreen(val){
            if(
                (this.drawerbarClose && !val) ||
                (!this.drawerbarClose && val)
            )
                this.switchDrawerbar()
        }
    },
    methods:{
        ...mapMutations([
            'switchDrawerbar',
            'switchDark', 
        ]),
        handleSmallScreenClose(e){
            const event = window.event || e;
            const path = e.path || (e.composedPath && e.composedPath());

            if(!this.drawerbarClose && this.isSmallScreen)
                var close = true
                path.forEach(ele=>{
                    if(ele.id==='drawerbar') close=false
                })
                if(close) {
                    this.switchDrawerbar()
                    event.stopPropagation()
                }
        }
    },
    mounted(){
        if(!this.drawerbarClose && this.isSmallScreen)
            this.switchDrawerbar()

        document.addEventListener('click', this.handleSmallScreenClose, true)
    }

}
</script>

<style lang="scss" scoped>
.drawerbar{
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    transition: background-color 300ms ease-in-out,
                transform 300ms ease-in-out;

    .drawerbarcontent{
        width: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar{
            width: 0px;
        }
    }
}
</style>