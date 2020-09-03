<template>
    <fixed>
        <div class="about">
            View: about<br>
        </div>
    </fixed>
</template>

<script>
import fixed from '@/components/pagecontainer/fixedCtn'
export default {
    components:{
        fixed
    }
}
</script>

<style scoped>
.about{
    font-weight: bold;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100% ;
    height: 100%;

    background-image: url('./../assets/1.jpg');
}
</style>