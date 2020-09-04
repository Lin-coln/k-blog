<template>
  <div class="md-container">
    <div v-html="md" class="md-root" :style='style'></div>
  </div>
</template>
 
<script>


import { mapState } from 'vuex'
export default {
  props:{
    md: String,
  },
  computed:{
    ...mapState({
      isDark:state=>state.theme.isDark,
    }),
    h1Color(){return `hsla(0,0%,
      ${this.isDark?100:0}%, ${this.isDark?95:90}%)`},
    h2Color(){return `hsla(0,0%,
      ${this.isDark?100:0}%, ${this.isDark?90:70}%)`},
    h3Color(){return `hsla(0,0%,
      ${this.isDark?100:0}%, ${this.isDark?70:60}%)`},
    hrColor(){return `hsla(0,0%,
      ${this.isDark?100:0}%, ${this.isDark?10:10}%)`},
    txtColor(){return `hsla(0,0%,
      ${this.isDark?100:0}%, ${this.isDark?70:80}%)`},
    preColor(){return `hsla(0,0%,
      ${this.isDark?0:0}%, ${this.isDark?30:6}%)`},
    refColor(){return `hsla(0,0%,
      ${this.isDark?0:0}%, ${this.isDark?20:6}%)`},
    refLineColor(){return `hsla(0,0%,
      ${this.isDark?100:0}%, ${this.isDark?50:40}%)`},
    style(){return {
      '--h1Color': this.h1Color,
      '--h2Color': this.h2Color,
      '--h3Color': this.h3Color,
      '--hrColor': this.hrColor,
      '--txtColor': this.txtColor,
      '--preColor': this.preColor,
      '--refColor': this.refColor,
      '--refLineColor': this.refLineColor,
    }}
  }
}
</script>
 
<style lang="scss" scope>
.md-container{
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: center;
}
.md-root{
  width: 100%;
  max-width: 1000px;
  overflow-x: hidden;

    color: var(--txtColor);
    font-size: 15px;
    font-weight: normal;
    transition: color 300ms ease-in-out;

    & h1{
      color: var(--h1Color);
      font-size: 2em;
      font-weight: bold;
      margin-top: 64px;
      margin-bottom: 8px;
      transition: color 300ms ease-in-out;
    }
    & h2{
      color: var(--h2Color);
      font-size: 1.4em;
      font-weight: bold;
      margin-top: 32px;
      margin-bottom: 8px;
      transition: color 300ms ease-in-out;
    }
    & h3{
      color: var(--h3Color);
      font-size: 1.2em;
      font-weight: bold;
      margin-top: 16px;
      margin-bottom: 8px;
      transition: color 300ms ease-in-out;
    }
    & hr{
      border: 0px solid var(--hrColor);
      border-bottom: 1px solid var(--hrColor);
      transition: color 300ms ease-in-out;
    }

    & p {
      margin: 8px 0px;
    }

    & ul, ol{
      padding-left: 24px;
      & li{
        
      }
    }
    & > ul, > ol{
      margin: 16px 0;
      line-height: 180%;
    }

    & blockquote{
      background-color: var(--refColor);
      margin: 0;
      padding: 8px;
      padding-left: 24px;
      border-left: 4px solid var(--refLineColor);
      
      transition: 
        border-color 300ms ease-in-out,
        background-color 300ms ease-in-out;
    }
    & > blockquote{
      background-color: var(--refColor);
      margin: 16px 0;
      padding: 16px;
      padding-left: 24px;
      border-left: 4px solid var(--refLineColor);
    }
    

    & code{
      background-color: var(--preColor);
      padding: 8px;
      margin: 0 8px;
      border-radius: 8px;
      transition: background-color 300ms ease-in-out;
    }
    & pre {
      background-color: var(--preColor);
      margin: 16px 0;
      padding: 16px;
      border-radius: 8px;
      overflow-x: scroll;
      transition: background-color 300ms ease-in-out;
      & > code{
        background-color: transparent;
        padding: 0;
        margin: 0;
        border-radius: 0;
      }
      &::-webkit-scrollbar{
        height: 0px;
      }
    }

}
</style>