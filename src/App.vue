<template>
  <headerPostres msg="" />
  <div class="banner">
    <div class="banner-text">
      <h1>Bienvenidos a la Pastelería</h1>
      <p>Deliciosos postres para todos los gustos</p>
    </div>
    <img src="./assets/banner.webp" alt="Banner" class="banner-image" />
  </div>
  <div class="contendorBoton">
    <CrearPostre @postreCreado="agregarPostreLocal" />
  </div>
  <div class="carrusel">
    <ContenedorPostres v-for="(postre, index) in postres" :key="index" :id="postre.id"
      :image_url="`http://localhost:4000/uploads/${postre.image_url}`" :name="postre.name"
      :description="postre.description" :price="postre.price" @postreEliminado="eliminarPostreLocal"
      @postreEditado="editarPostreLocal" />
  </div>

</template>

<script>
import ContenedorPostres from './components/ContenedorPostres.vue';
import headerPostres from './components/headerPostres.vue';
import CrearPostre from './views/CrearPostre.vue';


export default {
  name: 'App',
  components: {
    headerPostres,
    ContenedorPostres,
    CrearPostre,
  },
  data() {
    return {
      postres: [],
    };
  },
  methods: {
    async cargarPostres() {
      try {
        const response = await fetch('http://localhost:4000/desserts');
        if (response.ok) {
          this.postres = await response.json();
        } else {
          console.error('Error al cargar los postres');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    eliminarPostreLocal(id) {
      this.postres = this.postres.filter(postre => postre.id !== id);
    },
    editarPostreLocal(postreEditado) {
      const index = this.postres.findIndex(p => p.id === postreEditado.id);
      if (index !== -1) {
        this.postres[index] = postreEditado;
      }
    },

    agregarPostreLocal(nuevoPostre) {
      this.postres.push(nuevoPostre);
    }
  },
  mounted() {
    this.cargarPostres();
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}

.contendorBoton {
  display: flex;
  margin-left: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
}

/* Estilos base */
.carrusel {
  width: 100%;
  max-width: 100vw;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
  opacity: 0.9;
}

.carrusel::-webkit-scrollbar {
  height: 8px;
}

.carrusel::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 4px;
}

.carrusel>* {
  flex: 0 0 auto;
  scroll-snap-align: center;
  max-width: 300px;
}


.banner {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-items: center;
  padding: 5px;
  gap: 20px;
}

.banner-text {
  width: 100%;
  max-width: 500px;
  color: #2c3e50;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
}

.banner-text h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.banner-text p {
  font-size: 1.2em;
}

.banner-image {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  object-fit: cover;
}

/* Estilos para pantallas grandes */
@media (min-width: 768px) {
  .carrusel {
    /* Mantiene el carrusel horizontal en pantallas grandes */
    flex-direction: row;
  }

  .banner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .banner-text,
  .banner-image {
    width: 45%;
    text-align: left;
  }

  .banner-text h1 {
    font-size: 2.5em;
  }
}
</style>
