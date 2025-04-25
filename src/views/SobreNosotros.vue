<template>
    <div class="container">
    <SiderBar></SiderBar>

    <div class="content">
        <input type="texto" v-model="texto" >
    {{ texto }}
    <router-view></router-view>
</div>
</div>
<div>
    <TemperaturaComponent :mensaje ="texto"></TemperaturaComponent>
</div>
<div>
</div>

</template>

<script setup>
import SiderBar from '../components/SiderBar.vue'
import TemperaturaComponent from '../components/TemperaturaComponent.vue'
import {ref} from 'vue'
const texto = ref('')


</script>
<style scoped>
.container{
   display: flex; 
}
.content{
    margin-top: 70px;
    background-color: aqua;
    flex: 1;
    padding: 20px;
}

</style>