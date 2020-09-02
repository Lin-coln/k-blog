<template>
    <div class="appbartitle" :style="style">
        {{titleContent}}
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed:{
        ...mapState({
            titleContent:state=>state.cpn.appbar.title.titleContent
        }),
        ...mapGetters([
            'appbarPaddingStr',
            'drawerButtonClose',
            'appbarButtonSizeStr',
            'appbarTitleMaxWidthStr',
            'appbarTitleLeftStr',
            'appbarTitleTopStr',
            'appbarTitleWidthStr',
            'appbarTitleHeightStr',
            'appbarTitleFontSizeStr',
        ]),
        style(){
            const drawerButtonOffset =  
                this.drawerButtonClose?'0px'
                : `calc(${this.appbarButtonSizeStr} + ${this.appbarPaddingStr})`
   
            return {
                minWidth:   '180px',
                maxWidth:   this.appbarTitleMaxWidthStr(drawerButtonOffset),
                left:       this.appbarTitleLeftStr(drawerButtonOffset),
                top:        this.appbarTitleTopStr,
                width:      this.appbarTitleWidthStr,
                height:     this.appbarTitleHeightStr,
                lineHeight: this.appbarTitleHeightStr,
                fontSize:   this.appbarTitleFontSizeStr,
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbartitle{
    transition: all 300ms ease-in-out;

    position: absolute;
    font-weight: bold;

    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

    // background-color: aquamarine;
}

</style>