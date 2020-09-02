


const state = () => ({
    isDark: false,
    backgroundColor:     "hsl(0,0%,88%)",
    backgroundColorDark: "hsl(0,0%,5%)",
})
const mutations = {
    setBackgroundColor:(state, color)=> { state.backgroundColor = color },
    setBackgroundColorDark:(state, color)=> { state.backgroundColorDark = color },
    switchDark(state){ state.isDark = !state.isDark },
}
const actions = {

}
const getters = {

}
export default {
    state, mutations, actions, getters
} 