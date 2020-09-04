<template>
    <mdlayout :mdData='demo'/>
</template>

<script>
import mdlayout from './mdlayout'


import demo from "@/assets/demo.md"
import note from "@pub/notes/note.md"
export default {
    components:{
        mdlayout
    },
    // data(){return{
    //     demo: demo
    // }},
    computed:{
        demo(){
            return note
        }
    }
}
</script>