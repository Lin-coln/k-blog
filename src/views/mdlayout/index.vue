
<template>
    <scroll
        :bgColor='bgColor'
        :bgColorDark='bgColorDark'
         paddingTop='0px'
        :paddingBottom='paddingCpt'
        :paddingLeft='paddingCpt'
        :paddingRight='paddingCpt'>
        <div :style='style'>
            <styler :md='mdData'></styler>
        </div>
    </scroll>
</template>

<script>
import scroll from '@/components/pagecontainer/scrollCtn'
import styler from './styler'

import { mapState, mapGetters, mapMutations } from 'vuex'


export default {
    components: { scroll, styler },
    props:{
        mdData: String,
    },
    data(){return{
        bgColor: 'hsl(0, 0%, 95%)',
        bgColorDark: 'hsl(0, 0%, 20%)',
        padding: ['16px','32px'],
    }},
    computed:{
        ...mapState({
            bodyWidth:state=>state.env.bodyWidth,
            drawerbarWidth:state=>state.cpn.drawerbar.drawerbarWidth,
        }),
        ...mapGetters([
            'isSmallScreen',
        ]),
        paddingCpt(){
            return this.padding[this.isSmallScreen?0:1]
        },
        style(){return{
            width: '100%',
            fontSize: '2em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }},

        titleLeft(){
            var a = this.bodyWidth - this.drawerbarWidth
            if(a<=1000+2*32){
                return this.isSmallScreen?'16px':'32px'
            }else{
                return `calc((100% - 1000px)/2)`
            }
        }
    },
    watch:{
        bodyWidth(val){
            this.setAppbarTitleStyleOverride({
                left: this.titleLeft, 
                top: '108px', 
                height: '80px', 
                width: '100%', 
                fontSize: '8em',
                maxWidth: `100%`,
            })
        }
    },
    methods:{
        ...mapMutations([
            'setAppbarHeightExpand',
            'setAppbarTitleStyleOverride',
        ]),
    },
    mounted(){
        this.setAppbarHeightExpand('120px')
        this.setAppbarTitleStyleOverride({
            left: this.titleLeft, 
            top: '108px', 
            height: '80px', 
            width: '100%', 
            fontSize: '8em',
            maxWidth: `100%`,
        })
    }
}
</script>