<template>
    <mdlayout :mdData='demo'/>
</template>

<script>
import mdlayout from './mdlayout'


import demo from "@/assets/demo.md"
export default {
    components:{
        mdlayout
    },
    data(){return{
        demo: demo
    }}
}
</script>