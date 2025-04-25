<template>
    <div class="contenedor">
        <div>
            <h1>{{ mensajeRecibido }} la temperatura actual es: </h1>
        </div>

        <div>
            <h3>{{ weatherStore.temperatura }}</h3>
        </div>
    </div>

</template>

<script setup>
import { useWeather } from '@/composable/useWeather';
import { onMounted } from 'vue'
import { useWeatherStore } from '../stores/weatherStore'
import { defineProps } from 'vue'
import { ref, watch } from 'vue'


const weatherStore = useWeatherStore()

const props = defineProps(['mensaje'])
const mensajeRecibido = ref(props.mensaje)
watch(() => props.mensaje, (newValue) => {
    mensajeRecibido.value = newValue
})

onMounted(() => {
    useWeather()
})
</script>

<style scoped>
.contenedor {
    flex-direction: column;
    width: 50%;
    height: 250px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: rgb(166, 116, 54);

}
</style>