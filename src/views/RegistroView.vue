<template>
    <div class="formulario">
        <Form :validation-schema="schema" @submit="onSubmit">
            <h2>formulario de registro</h2>
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field v-model="nombre" id="nombre" name="nombre" type="text" placeholder="ingrese su nombre"/>
                <ErrorMessage name="nombre"/>
            </div>
            <div  class="form">
                <label for="correo">Correo:</label>
                <Field v-model="email" id="correo" name="email" type="email" placeholder="ingrese su emial"/>
                <ErrorMessage name="email"/>
            </div>
            <div  class="form">
                <button type="submit">Registrar</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate'
import {schema} from '../schemas/validationSchemas'
import {useRegistrarStore} from '../stores/registrarStore'
import {ref} from 'vue'

const registrarStore  = useRegistrarStore()
const nombre = ref('')
const email = ref('')

const onSubmit = () =>{
    registrarStore.guardarRegistro(nombre.value, email.value)
}
</script>

<style scoped>
.formulario {
    margin-top: 90px;
}
.form{
    margin-bottom: 10px;
}
</style>