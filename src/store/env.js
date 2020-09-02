
const getBodyWidth =()=> document.documentElement.offsetWidth || document.body.offsetWidth
const getBodyHeight=()=> document.documentElement.offsetWidth || document.body.offsetWidth



const state = () => ({
    bodyWidth: getBodyWidth(),
    bodyHeight: getBodyHeight(),
})
const mutations = {
    setBodyWidth:  (state, width) =>  { state.bodyWidth = width },
    setBodyHeight: (state, height) => { state.bodyHeight = height },
}
const actions = {

}
const getters = {
    isSmallScreen: state=> state.bodyWidth<1000
}
export default {
    state, mutations, actions, getters
} 