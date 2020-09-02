<template>
    <div class="drawerbarprofile" :style="style">
        K-BLog
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'isSmallScreen',
            'appbarColor',
            'appbarHeightStr',
        ]),
        style(){
            return {
                backgroundColor: 
                    this.isSmallScreen
                    ? 'transparent'
                    : this.appbarColor,
                height: this.appbarHeightStr
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.drawerbarprofile{
    width: 100%;
    font-size: 2.8em;
    line-height: 68px;
    text-align: center;
    font-weight: bold;

    transition: all 300ms ease-in-out;
}
</style>