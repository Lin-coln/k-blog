<template>
    <div class="drawerbarlist" 
        :style='style'>
        <item         
            v-for="(item, index) in drawerbarListData"
            :key='index' :isFocus='index == focusIndex'
            :icon='item.icon' :text='item.name' 
            @click='handleClick(item.id, index)'
            :focusBackgroundColor='focusBackgroundColor'
            :focusColor='focusColor'
            :blurColor='blurColor'/>
        <div class="drawerbarhighlight" :style='highlightStyle'></div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import item from './item'
export default {
    components: { item },
    data(){
        return {
            itemSize: 56,
        }
    },
    computed:{
        ...mapState({
            isDark:state=>state.theme.isDark,
            drawerbarListFocusIndex:state=>
                state.cpn.drawerbar.list.drawerbarListFocusIndex,
        }),
        ...mapGetters([
            'drawerbarListData',
            'isSmallScreen',
        ]),
        focusIndex(){
            return this.drawerbarListFocusIndex
        },
        focusBackgroundColor(){
            return this.isDark
                ? 'hsla(0,0%,100%, 8%)'
                : 'rgba(0,0,0,0.05)'
        },
        focusColor(){
            return this.isDark
            ? 'white'
            : 'black'
        },
        blurColor(){
            return this.isDark
            ? 'hsla(0,0%,100%, 40%)'
            : 'rgba(0,0,0,0.5)'
        },
        style(){
            return {
                
            }
        },
        highlightStyle(){
            return {
                top: `${this.focusIndex*this.itemSize}px`,
                height: `${this.itemSize}px`,
                backgroundColor: this.focusColor,
            }
        }
    },
    methods:{
        ...mapMutations([
            'drawerbarListItemClick',
            'swtichDrawerbar'
        ]),
        handleClick(id, index){
            this.drawerbarListItemClick({id, index})
            if(this.isSmallScreen){
                this.swtichDrawerbar();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.drawerbarlist{
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    transition: all 300ms ease-in-out;
    margin-bottom: 4px;
    &>.drawerbarhighlight{
        pointer-events: none;
        width: 2.5px;
        position: absolute;
        right: 0;
        transition: all 300ms ease-in-out;
    }
}
</style>