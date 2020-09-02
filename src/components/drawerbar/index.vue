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
            }
        },
        contentStyle(){
            return {
                height: `calc(100% - ${this.appbarHeightStr})`
            }
        },
    },
    methods:{
        ...mapMutations([
            'switchDrawerbar',
            'switchDark', 
        ]),
        onClick(event){
            console.log('drawerbarmask click')
            
        }
    },
    mounted(){
        var that = this
        document.addEventListener('click', (e)=>{
            const event = window.event || e;
            const path = e.path || (e.composedPath && e.composedPath());

            if(!that.drawerbarClose && that.isSmallScreen)
                var close = true
                path.forEach(ele=>{
                    if(ele.id==='drawerbar') close=false
                })
                if(close) {
                    that.switchDrawerbar()
                    event.stopPropagation()
                }
        }, true)
    }

}
</script>

<style lang="scss" scoped>
.drawerbar{
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
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