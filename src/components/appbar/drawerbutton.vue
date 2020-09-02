
<script>
import button from './button'
import { mapMutations } from 'vuex'
export default {
    extends: button,
    props:{
        icon: { type: String, default: 'fas fa-list fa-1x fa-fw' },
    },
    methods:{
        ...mapMutations([
            'switchDrawerbar'
        ]),
        handleClick(){
            this.switchDrawerbar()
        }
    }
}
</script>