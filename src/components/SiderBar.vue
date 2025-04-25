<template>
<div class="sidebar">
<h2>Bienvenido</h2>
<h3>Nombre {{ registrarStore.nombre }}</h3>
<h3>Email {{ registrarStore.email }}</h3>
<ul class="lista-barra-izquierda">
    <li><router-link to="/contador-vue">contador</router-link></li>
    <li><router-link to="/listas-tareas">Lista de tareas</router-link></li>
    <li><router-link to="/Registro-view">Registrarse</router-link></li>
</ul>

</div>
</template>

<script setup> 
import { useRegistrarStore } from '@/stores/registrarStore';
const registrarStore = useRegistrarStore()

</script>

<style>
.sidebar{
    margin-top: 90px;
    width: 200px;
    background-color: bisque;
    padding: 20px;
    display: flex;
    flex-direction: column;
}
.lista-barra-izquierda{
    display: flex;
    flex-direction: column;
}

</style>