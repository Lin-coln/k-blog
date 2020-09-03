<template>
    <div class="pagecontainer" :style="style">
        <trans>
            <slot></slot>
        </trans>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import trans from './trans'
export default {
    name: 'pagecontainer',
    components: { trans, },
    computed:{
        ...mapGetters([
            'pagecontainerWidthStr',
        ]),
        style(){return {
            width: this.pagecontainerWidthStr
        }}
    },
}
</script>

<style lang="scss" scoped>
.pagecontainer{
    z-index: 2;
    position: absolute;
    height: 100%;
    right: 0;
    overflow-y: hidden;
}
</style>