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
      <BotonesPostres texto="Agregar Postre" color="green" :accion="miFuncion" />
    </div>
    <div class="formulario">
      <h2>Agregar Nuevo Postre</h2>
      <form @submit.prevent="enviarPostre">
        <input type="text" v-model="nuevoPostre.name" placeholder="Nombre del postre" required />
        <input type="number" v-model="nuevoPostre.price" placeholder="Precio" step="0.01" required />
        <textarea v-model="nuevoPostre.description" placeholder="Descripción del postre" required></textarea>
        <input type="file" @change="handleFileUpload" required />
        <button type="submit">Guardar Postre</button>
      </form>
    </div>
    <div class="carrusel">
      <ContenedorPostres v-for="(postre, index) in postres" :key="index"
        :image_url="`http://localhost:4000/uploads/${postre.image_url}`"
        :name="postre.name" :description="postre.description"
        :price="postre.price" 
        />
       


    </div>

</template>

<script>
import BotonesPostres from './components/BotonesPostres.vue';
import ContenedorPostres from './components/ContenedorPostres.vue';
import headerPostres from './components/headerPostres.vue'

export default {
  name: 'App',
  components: {
    headerPostres,
    ContenedorPostres,
    BotonesPostres,
  },
  data() {
    return {
      nuevoPostre: {
        name: '',
        price: '',
        description: '',
        image_url: null,
      },
      postres: [],
    };
  },
  methods: {
    miFuncion() {
      alert('agregar postre');
    },
    handleFileUpload(event) {
      this.nuevoPostre.image_url = event.target.files[0];
    },
    async enviarPostre() {
      const formData = new FormData();
      formData.append('name', this.nuevoPostre.name);
      formData.append('price', this.nuevoPostre.price);
      formData.append('description', this.nuevoPostre.description);
      formData.append('image', this.nuevoPostre.image_url);

      try {
        const response = await fetch('http://localhost:4000/desserts', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const postreCreado = await response.json(); // el backend debe devolver el postre creado
          this.postres.push(postreCreado);
          alert('Postre agregado exitosamente');
          // Resetear el formulario
          this.nuevoPostre = {
            name: '',
            price: '',
            description: '',
            image_url: null,
          };
        } else {
          alert('Error al agregar el postre');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar la solicitud');
      }
    },
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
  },
  mounted() {
    this.cargarPostres();
  },
};
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
