<template>
    <div class="fixedCtn" :style="style">
        <slot></slot>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: {
        bgColor: {type: String, default: 'transparent'},
    },
    computed:{
        ...mapGetters([
            'appbarHeightStr'
        ]),
        style(){ return {
            paddingTop: this.appbarHeightStr,
            backgroundColor: this.bgColor,
        }}
    },
    methods:{
        ...mapMutations(['setAppbarSolid']),
    },
    mounted(){
        this.setAppbarSolid(true)
    }
}
</script>

<style lang="scss" scoped>
.fixedCtn{
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    box-sizing: border-box;

    
    transition: 
        all 800ms ease-in-out,
        background-color 300ms ease-in-out,
        padding-top 300ms ease-in-out;
}
</style>