

const state = () => ({
    
})
const mutations = {
    
}
const actions = {

}
const getters = {
    pagecontainerWidthStr:(state, getters, root, rootGetters)=> 
         rootGetters.isSmallScreen
        ? '100vw'
        : `calc(100vw - ${rootGetters.drawerbarWidthStr})`,

}
const modules={

}
export default {
    state, mutations, actions, getters, modules
} 