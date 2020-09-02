

const state = () => ({
    buttonSize: 32
})
const mutations = {
    
}
const actions = {

}
const getters = {
    appbarButtonSizeStr:state=> state.buttonSize+'px',

    drawerButtonClose: (state, getters, root, rootGetters)=> {
        return !rootGetters.isSmallScreen
    }
}
export default {
    state, mutations, actions, getters
} 