import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import env from './env'
import theme from './theme'

import cpn from './cpn'

const config = {
  state: {
    stupidsValue: 0
  },
  mutations: {
    setV:(state, v)=>{state.stupidsValue = v}
  },
  actions: {

  },
  modules: {
    theme: theme,
    env: env,
    cpn: cpn,
  }
}
export default new Vuex.Store(config)
