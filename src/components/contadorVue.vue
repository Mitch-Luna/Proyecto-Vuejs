<template>
    <h1 class="saludo">{{contador}}</h1>
<button @click="incrementar">incrementar</button>
<button @click="Decrementar">Decrementar</button>
</template>

<script setup>
import { ref } from 'vue'

const contador = ref(0)

const incrementar = () => {
    contador.value++
}
const Decrementar = () => {
    contador.value--
}

</script>

<style>
.saludo {
    color: rgb(62, 22, 22);
    font-size: 70px;

}
p{
    color: rgb(62, 22, 22);
    font-size: 70px;
}
</style>