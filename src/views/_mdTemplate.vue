
<script>
import scroll from '@/components/pagecontainer/scrollCtn'
export default {
    extends: scroll,
    props:{
        bgColor:    {type: String, default: 'hsl(0,0%,98%)'},
        paddingLeft:    {type:String, default: '16px'},
        paddingRight:   {type:String, default: '16px'},
        paddingTop:     {type:String, default: '0px'},
        paddingBottom:  {type:String, default: '32px'}, 
    },
}
</script>