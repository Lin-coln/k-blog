
import router from '@/router'


const state = () => ({
    drawerbarListFocusIndex: 0,
})
const mutations = {
    drawerbarListItemClick(state, args){
        const getRoute = (id)=>{
            switch(id){
                default:
                    return '/'
                case 'home':
                    return '/home'
                case 'about':
                    return '/about'
            }
        }
        if(state.drawerbarListFocusIndex != args.index)
        {
            state.drawerbarListFocusIndex = args.index

            router.replace(getRoute(args.id))
        }
        
        

    }
}
const actions = {

}
const getters = {
    drawerbarListData:(state)=>{return[
        { 
            id:   'home',
            icon: 'fas fa-home fa-1x fa-fw',     
            name: 'Home', 
        },
        { 
            id:   'about',
            icon: 'fas fa-info-circle fa-1x fa-fw',     
            name: 'About', 
        },
    ]},
}
export default {
    state, mutations, actions, getters
} 