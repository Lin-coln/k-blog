<template>
    <layout>
        <div class="home">
            <t/>
        </div>
    </layout>
</template>

<script>
import fixed from '@/components/pagecontainer/fixedCtn'

import layout from './_mdTemplate'
import t from './t'
import { mapMutations } from 'vuex'
export default {
    components:{
        t,
        fixed, layout
    },
    methods:{
        ...mapMutations([
            'setAppbarHeightExpand',
            'setAppbarTitleStyleOverride',
        ]),
    },
    beforeMount(){
        this.setAppbarHeightExpand('120px')
        this.setAppbarTitleStyleOverride({
            left: '16px', 
            top: '108px', 
            height: '80px', 
            width: '100%', 
            fontSize: '6em',
            maxWidth: `100%`,
        })
    }
}
</script>

<style scoped>
.home{
    /* font-weight: bold; */
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
}
</style>