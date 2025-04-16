<template>

      <button :style="{ backgroundColor: color }" class="boton" @click="accion">
        {{ texto }}
      </button>

  </template>
  
  <script>
  export default {
  
    props: {
      texto: {
        type: String,
        default: "Botón",
      },
      color: {
        type: String,
        default: "#3498db" // azul por defecto
      },
      accion: {
        type: Function,
        required: true,
      },
}
  };
  </script>
  
  <style scoped>
  .boton {
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .boton:hover {
    opacity: 0.8;
  }
  </style>
  