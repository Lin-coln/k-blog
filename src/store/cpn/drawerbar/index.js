

const state = () => ({
    drawerbarWidth: 240,
    drawerbarColorLight: 'hsl(0, 0%, 92%)',
    drawerbarColorDark: 'hsl(0, 0%, 15%)',
    drawerbarClose: false,
})
const mutations = {
    switchDrawerbar:(state)=> { state.drawerbarClose = !state.drawerbarClose },
}
const actions = {

}
const getters = {
    drawerbarWidthStr:state=> state.drawerbarWidth+'px',
    drawerbarColor:(state, getters, root)=> root.theme.isDark
        ? state.drawerbarColorDark
        : state.drawerbarColorLight ,
    drawerbarZIndex:(state, getters, root, rootGetters)=> 
        rootGetters.isSmallScreen? 4 : 1,
}
import list from './list'
const modules={
    list: list,
}
export default {
    state, mutations, actions, getters, modules
} 