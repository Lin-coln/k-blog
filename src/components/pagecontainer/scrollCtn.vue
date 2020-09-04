<template>
    <div 
        ref='layout'
        :style="style" 
        class="scrollCtn">
        <div 
            :style="{ 
                minHeight: `calc(100vh - ${this.appbarHeightStr})`, 
                width: '100%', 
                height: 'auto' 
            }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    props:{
        bgColor:        {type:String, default: 'transparent'},
        bgColorDark:    {type:String, default: 'transparent'},
        offset:         {type:String, default: '0px'},
        paddingLeft:    {type:String, default: '0px'},
        paddingRight:   {type:String, default: '0px'},
        paddingTop:     {type:String, default: '0px'},
        paddingBottom:  {type:String, default: '0px'}, 
    },
    computed:{
        ...mapState({
            appbarSolid:state=>state.cpn.appbar.appbarSolid,
            isDark:state=>state.theme.isDark,
        }),
        ...mapGetters([
            'appbarHeightStr',
            'appbarHeightWidthExpandStr',
        ]),
        style(){ return {
            backgroundColor: this.isDark?this.bgColorDark:this.bgColor,
            paddingTop: 
                this.appbarSolid
                ? `calc(${this.appbarHeightWidthExpandStr} + ${this.paddingTop})`
                : `calc(${this.appbarHeightWidthExpandStr} + ${this.paddingTop} 
                    - ${this.offset})`,
            paddingBottom:  this.paddingBottom,
            paddingLeft:    this.paddingLeft,
            paddingRight:   this.paddingRight,
        }}
    },
    methods:{
        ...mapMutations([
            'setAppbarSolid',
        ]),

        scroll(e){
            const event = window.event || e;
            
            var scrollTop = this.$refs.layout.scrollTop
            var isSolid = (scrollTop!=0)
            if(isSolid != this.appbarSolid){
                this.setAppbarSolid(isSolid)
            }
            this.$emit('handleScroll', event, this.$refs.layout)
        },
    },
    mounted(){
        this.setAppbarSolid(false)
        this.$refs.layout.addEventListener('scroll', this.scroll)
    },
    beforeDestroy(){
        this.$refs.layout.removeEventListener('scroll', this.scroll)
    },
}
</script>

<style lang="scss" scoped>
.scrollCtn{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    transition: 
        all 800ms ease-in-out,
        background-color 300ms ease-in-out,
        padding-top 300ms ease-in-out;
    &::-webkit-scrollbar{
        width: 0px;
    }
}
</style>