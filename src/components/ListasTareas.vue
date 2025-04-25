<template>
<div class="tareas">
    <h2>Listas de tareas</h2>
    <input type="text" name="" id="" v-model=" nuevaTrea" @keyup.enter="addTarea">
    <ul>
        <li v-for="(tareas, index) in tareas" :key="index">{{ tareas }}</li>
    </ul>
    <button @click="borrarTarea">borrarTarea</button>
</div>
</template>


<script setup>
import { ref } from 'vue'

const tareas = ref([]);
const nuevaTrea = ref('');
const addTarea = () => {
    tareas.value.push(nuevaTrea.value)
    nuevaTrea.value = ''
}

const borrarTarea = (index) =>{
    tareas.value.splice(index,1);
}
</script>


<style>
.tareas{
   margin-top: 70px; 
}
</style>