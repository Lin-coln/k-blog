<template>
    <mdlayout :mdData='note'/>
</template>

<script>
import mdlayout from './mdlayout'


import note from "@/assets/note.md"
// const note = require("@pub/notes/note.md")
export default {
    components:{
        mdlayout
    },
    computed:{
        note(){
            return note
        }
    }
}
</script>