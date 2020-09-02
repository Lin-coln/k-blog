<template>
  <div id="app" :style="style" @click="appclick">
      <appbar/>

      <drawerbar>
        <button @click="handleClick" />
      </drawerbar>

      <button @click="handleClick" />

      {{ stupidsValue }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import drawerbar from '@/components/drawerbar'
import appbar from '@/components/appbar'
export default {
    components:{
      drawerbar, appbar
    },


  computed:{
    ...mapState({
      isDark:           state=> state.theme.isDark,
      backgroundColor:  state=> state.theme.backgroundColor,
      backgroundColorDark:  state=> state.theme.backgroundColorDark,
      drawerbarClose:  state=> state.cpn.drawerbar.drawerbarClose,

      stupidsValue: state=> state.stupidsValue,
    }),
    ...mapGetters([
      'isSmallScreen'
    ]),
    style(){
      return {
        fontSize: this.isSmallScreen? '80%': '100%'
      }
    },
  },
  watch:{
    isDark(newVal){
      document.body.style.backgroundColor = newVal
        ? this.backgroundColorDark
        : this.backgroundColor
      document.body.style.color = newVal
        ? 'white'
        : 'black'
    },
    backgroundColor(newVal){
      if (!this.isDark) 
        document.body.style.backgroundColor = newVal
    },
    backgroundColorDark(newVal){    
      if (this.isDark) 
        document.body.style.backgroundColor = newVal
    },
  },
  methods:{
    ...mapMutations([
      'switchDrawerbar',
      'setAppbarSolid',
      'switchDark', 
      'setAppbarHeightExpand', 
      'setAppbarTitleStyleOverride', 


      'setBackgroundColor', 
      'setBackgroundColorDark',
      'setBodyWidth',
      'setBodyHeight',
    ]),

    appclick:()=>{console.log('appclick')},

    handleClick(){
      this.switchDark()
      // this.switchDrawerbar();
      
      // if(this.$store.state.cpn.appbar.appbarSolid){
      //   this.setAppbarSolid(false)
      //   this.setAppbarHeightExpand('200px')

      //   this.setAppbarTitleStyleOverride({
      //     left: '32px', 
      //     top: '68px', 
      //     height: '80px', 
      //     width: '100%', 
      //     fontSize: '4em',
      //     maxWidth: `100%`,
      //   })
      // }else{
      //   this.setAppbarSolid(true)
      //   this.setAppbarHeightExpand('200px')
      // }

    },
  },
  mounted(){
    document.body.style.backgroundColor = this.isDark
      ? this.backgroundColorDark
      : this.backgroundColor
    document.body.style.color = this.isDark
        ? 'white'
        : 'black'

    window.onresize = ()=>{
      const width  = document.documentElement.offsetWidth || document.body.offsetWidth
      const height = document.documentElement.offsetWidth || document.body.offsetWidth
      this.setBodyWidth(width)
      this.setBodyHeight(height)
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  border: 0;
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  font-size: 62.5%;
  transition: background-color 300ms ease-in-out;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}


.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-leave, .fade-enter-to{
  opacity: 1;
}

</style>
