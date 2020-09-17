<template>
    <mdlayout :mdData='note'/>
</template>

<script>
import mdlayout from './../mdlayout'


// import note from "@/assets/note.md"
const notse = require("@pub/notes/note.md")
export default {
    components:{
        mdlayout
    },
    computed:{
        note(){
            return notse
        }
    }
}
</script>