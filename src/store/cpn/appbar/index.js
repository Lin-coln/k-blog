
const state = () => ({
    appbarSolid: true,
    appbarPadding: 8,
    appbarHeight: 68,
    appbarHeightExpand: '0px',
    appbarColorLight: 'hsl(0, 0%, 98%)',
    appbarColorDark:  'hsl(0, 0%, 25%)',
    appbarContentColorLight:    'black',
    appbarContentColorDark:     'white',
    appbarContentColorOverride: '0',
})
const mutations = {
    setAppbarSolid:(state, solid)=> state.appbarSolid = solid,
    setAppbarHeightExpand:(state, expand)=> state.appbarHeightExpand = expand,
}
const actions = {

}
const getters = {
    appbarPaddingStr:state=> state.appbarPadding+'px',
    appbarWidthStr:(state, getters, root, rootGetters)=> 
         rootGetters.isSmallScreen
        ? '100vw'
        : `calc(100vw - ${rootGetters.drawerbarWidthStr})`,
    appbarHeightStr:state=> 
        state.appbarHeight+'px',
    appbarHeightWidthExpandStr:(state, getters)=> 
        state.appbarSolid
        ? getters.appbarHeightStr
        : `calc(${getters.appbarHeightStr} + ${state.appbarHeightExpand})`,
    appbarColor:(state, getters, root)=> 
        ! state.appbarSolid
        ? 'transparent'
        : root.theme.isDark
        ? state.appbarColorDark
        : state.appbarColorLight ,
    appbarContentColor:(state, getters, root)=>
          ((state.appbarContentColorOverride!=='0')
          &&!state.appbarSolid)
        ? state.appbarContentColorOverride
        : root.theme.isDark
        ? state.appbarContentColorDark
        : state.appbarContentColorLight ,
}
import button from './button'
import title from './title'
const modules = {
    button: button, 
    title: title,
}
export default {
    state, mutations, actions, getters, modules
} 