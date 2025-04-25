<template>
  <div class="contenedor-postre">
    <div class="img-container">
      <img :src="image_url" alt="Imagen del postre" class="postre-img" />
    </div>
    <div class="postre-info">
      <h2>{{ name }}</h2>
      <p class="precio">C$ {{ price }}</p>
      <p class="descripcion">{{ description }}</p>
    </div>
    <div class=" botones">
      <EditarPostre :postre="{ id, name, price, description, image_url }" @postreEditado="editarPostre" />
      <EliminarPostre :id="id" @postreEliminado="removerPostre" />
    </div>
  </div>

</template>

<script>
import EliminarPostre from "@/views/EliminarPostre.vue";
import EditarPostre from "@/views/EditarPostre.vue";

export default {
  name: "ContenedorPostres",
  components: {
    EliminarPostre,
    EditarPostre
  },
  props: {
    image_url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
      removerPostre(id) {
        this.$emit("postreEliminado", id);
      },
      editarPostre(id) {
        this.$emit("postreEditado", id);
      },
    },
};
</script>

<style>
.botones {
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  z-index: 2000;
  

}
.img-container {
  display: flex;
  width: 100%;
  max-height: 200px;
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
  width: 300px;
  height: 470px;
  margin: auto;
  border-color: #36926f;
  border-width: 15px;
  border: 5px solid white;
  box-shadow: 0 5px 10px rgba(56, 48, 48, 0.5); /* rosita pastel */
}


.postre-img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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