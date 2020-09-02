const baseStyle = {
    left: '0',
    top: '0',
    width: '0',
    height: '0',
    fontSize: '0',
    maxWidth: '0',
}

const state = () => ({
    titleContent: 'Title',
    titleWidth: 500,
    titleStyleOverride: baseStyle,
})
const mutations = {
    setAppbarTitleStyleOverride:(state, override)=>
        state.titleStyleOverride = { ...state.titleStyleOverride, ...override },
}
const actions = {

}
const getters = {
    appbarTitleLeftStr:(state, getters, root, rootGetters)=>(offset)=>
        ((state.titleStyleOverride.left!=='0')
        &&!root.cpn.appbar.appbarSolid)
        ? state.titleStyleOverride.left
        : `calc(2 * ${rootGetters.appbarPaddingStr} + ${offset})`,
    appbarTitleTopStr:(state, getters, root)=>
        ((state.titleStyleOverride.top!=='0')
        &&!root.cpn.appbar.appbarSolid)
        ? state.titleStyleOverride.top
        : '0px',
    appbarTitleWidthStr:(state, getters, root)=>
        ((state.titleStyleOverride.width!=='0')
        &&!root.cpn.appbar.appbarSolid)
        ? state.titleStyleOverride.width
        : state.titleWidth+'px',
    appbarTitleHeightStr:(state, getters, root, rootGetters)=>
        ((state.titleStyleOverride.height!=='0')
        &&!root.cpn.appbar.appbarSolid)
        ? state.titleStyleOverride.height
        : rootGetters.appbarHeightStr,
    appbarTitleFontSizeStr:(state, getters, root)=>
        ((state.titleStyleOverride.fontSize!=='0')
        &&!root.cpn.appbar.appbarSolid)
        ? state.titleStyleOverride.fontSize
        : '2.4em',
        
    appbarTitleMaxWidthStr:(state, getters, root, rootGetters)=>(offset)=>
        ((state.titleStyleOverride.maxWidth!=='0')
        &&!root.cpn.appbar.appbarSolid)
        ? state.titleStyleOverride.maxWidth
        : `calc(100% - 3 * ${rootGetters.appbarPaddingStr} - ${offset})`,
}
export default {
    state, mutations, actions, getters
} 