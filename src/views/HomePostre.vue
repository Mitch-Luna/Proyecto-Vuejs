<template>
    <main>
      <div class="banner">
        <img src="https://www.shutterstock.com/image-vector/banner-design-cakes-muffins-cupcakes-260nw-2107733129.jpg" alt="Banner" class="banner-image" />
      </div>
  
      <div class="contendorBoton">
        <CrearPostre @postreCreado="agregarPostreLocal" />
      </div>
  
      <div class="carrusel">
        <ContenedorPostres
          v-for="(postre, index) in postres"
          :key="index"
          :id="postre.id"
          :image_url="`http://localhost:4000/uploads/${postre.image_url}`"
          :name="postre.name"
          :description="postre.description"
          :price="postre.price"
          @postreEliminado="eliminarPostreLocal"
          @postreEditado="editarPostreLocal"
        />
      </div>
    </main>
  </template>
  
  <script>

  import ContenedorPostres from '../components/ContenedorPostres.vue';
import CrearPostre from './CrearPostre.vue';
  
  export default {
    name: 'HomePostre',
    components: {
      CrearPostre,
      ContenedorPostres
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
        this.postres = this.postres.filter((postre) => postre.id !== id);
      },
      editarPostreLocal(postreEditado) {
        const index = this.postres.findIndex((p) => p.id === postreEditado.id);
        if (index !== -1) {
          this.postres[index] = postreEditado;
        }
      },
      agregarPostreLocal(nuevoPostre) {
        this.postres.push(nuevoPostre);
      },
    },
    mounted() {
      this.cargarPostres();
    },
  };
  </script>
  
<style scoped>


/* Estilos base */
.carrusel {
background-color: rgb(255, 255, 255);
  width: 100%;
  max-width: 100vw;
  height: auto;
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
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  padding: 15px;
  width: 100%;
  height: 500px;
}

.banner-image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

/* Estilos para pantallas grandes */
@media (min-width: 768px) {
  .carrusel {
    /* Mantiene el carrusel horizontal en pantallas grandes */
    flex-direction: row;
  }

  .banner-text h1 {
    font-size: 2.5em;
  }
}
</style>