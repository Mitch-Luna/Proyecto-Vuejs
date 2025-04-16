<template>
  <div class="contenedor-postre">
    <div class="img-container">
      <img :src="imagen" alt="Imagen del postre" class="postre-img" />
    </div>
    <div class="postre-info">
      <h2>{{ nombre }}</h2>
      <p class="precio">C$ {{ precio }}</p>
      <p class="descripcion">{{ descripcion }}</p>
    </div>
    <div class=" botones">
      <BotonesPostres texto="Editar" color="rgb(41, 128, 185 )" :accion="agregarElemento" />
      <BotonesPostres texto="Elimiar" color="	rgb(205, 92, 92) " :accion="agregarElemento" />
    </div>
  </div>

</template>

<script>
import BotonesPostres from "./BotonesPostres.vue";
export default {
  name: "ContenedorPostres",
  components: {
    BotonesPostres,
  },
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

<style>
.botones {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  
  justify-content: space-between;
}
.img-container {
  display: flex;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #e67e22;
}

.contenedor-postre {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
  margin: auto;
  border-color: #36926f;
  border-width: 15px;
  border: 5px solid white;
  box-shadow: 0 5px 10px rgba(56, 48, 48, 0.5); /* rosita pastel */
}

.postre-img {
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  
}

.postre-info {
  margin-top: 15px;
  text-align: center;
}

.precio {
  font-size: 20px;
  font-weight: bold;
  color: #1fa468;
  margin: 5px 0;
}

.descripcion {
  font-size: 1em;
  color: #555;
}

@media (max-width: 768px) {

  .contenedor-postre {
    max-width: 70%;
  }

  .postre-img {
    width: 100%;
    height: auto;
  }
}
</style>