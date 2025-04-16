<template>
    <div class="contenedor-postre">
      <img :src="imagen" alt="Imagen del postre" class="postre-img" />
      <div class="postre-info">
        <h2>{{ nombre }}</h2>
        <p class="precio">${{ precio }}</p>
        <p class="descripcion">{{ descripcion }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContenedorPostres",
    props: {
      imagen: {
        type: String,
        required: true,
      },
      nombre: {
        type: String,
        required: true,
      },
      precio: {
        type: String,
        required: true,
      },
      descripcion: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style scoped>
  .contenedor-postre {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: bisque;
    padding: 20px;
    border-radius: 10px;
    max-width: 300px;
    margin: auto;
  }
  
  .postre-img {
    width: 50%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .postre-info {
    margin-top: 15px;
    text-align: center;
  }
  
  .precio {
    font-weight: bold;
    color: #e67e22;
    margin: 5px 0;
  }
  
  .descripcion {
    font-size: 0.9em;
    color: #555;
  }
  </style>
  