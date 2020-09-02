<template>
    <div class="drawerbaritem" 
        :style='style' @click="$emit('click')">
        <div style="font-size:120%">
            <i :class="icon"></i>
        </div>
        <div style="width:12px;"></div>
        {{text}}
    </div>
</template>

<script>
export default {
    props:{
        isFocus: {type: Boolean, default: false},
        icon: String,
        text: String,

        focusBackgroundColor: String,
        focusColor: String,
        blurColor: String,
    },
    computed:{
        style(){
            return {
                color: this.isFocus?this.focusColor: this.blurColor,
                '--focusBackgroundColor': this.focusBackgroundColor,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.drawerbaritem{
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 24px;
    box-sizing: border-box;
    font-size: 1.6em;
    transition: all 300ms ease-in-out;
    font-weight: bold;

    -webkit-tap-highlight-color:transparent;
    &:hover{
        background-color: var(--focusBackgroundColor);
    }
}
</style>