<template>
    <div class="drawerbarlist" :style='style'>
        <item icon='fas fa-compass fa-1x fa-fw' text='Explore' 
                :focusBackgroundColor='focusBackgroundColor'
                :focusColor='focusColor'
                :blurColor='blurColor'
                @click="handleClick(0)"
                :isFocus="focusIndex==0"/>
        <item icon='fas fa-cloud fa-1x fa-fw'   text='Cloud'   
                :focusBackgroundColor='focusBackgroundColor'
                :focusColor='focusColor'
                :blurColor='blurColor'
                @click="handleClick(1)"
                :isFocus="focusIndex==1"/>
        <item icon='fas fa-hdd fa-1x fa-fw'     text='Local'  
                :focusBackgroundColor='focusBackgroundColor'
                :focusColor='focusColor'
                :blurColor='blurColor'
                @click="handleClick(2)"
                :isFocus="focusIndex==2"/>
        <item icon='fas fa-list fa-1x fa-fw'    text='Playlist'
                :focusBackgroundColor='focusBackgroundColor'
                :focusColor='focusColor'
                :blurColor='blurColor'
                @click="handleClick(3)"
                :isFocus="focusIndex==3"/>
        <item icon='fas fa-heart fa-1x fa-fw'   text='Favorite' 
                :focusBackgroundColor='focusBackgroundColor'
                :focusColor='focusColor'
                :blurColor='blurColor'
                @click="handleClick(4)"
                :isFocus="focusIndex==4"/>

        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='FFF' :blurColor='blurColor' @click="handleClick(4)"/>        
        <item icon='fas fa-heart fa-1x fa-fw'   text='F2FF' :blurColor='blurColor' @click="handleClick(4)"/>        


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
        }),
        
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

        focusIndex(){
            return 0 //this.getCurrentPageIndex
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
        // ...mapMutations(['setCurrentPageByIndex']),
        handleClick(index){
            // this.setCurrentPageByIndex(index)
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