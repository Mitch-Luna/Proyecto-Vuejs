<template>
    <div class="top-bar">
      <BotonesPostres texto="Agregar Postre" color="green" :accion="mostrarFormulario" />
    </div>
  
    <!-- Modal -->
    <transition name="fade">
      <div v-if="formularioVisible" class="modal-overlay">
        <div class="modal-content">
          <h2>🍰 Agregar Nuevo Postre</h2>
          <form @submit.prevent="enviarPostre">
            <input type="text" class="inputs" v-model="nuevoPostre.name" placeholder="Nombre del postre" required />
            <input type="number" class="inputs" v-model="nuevoPostre.price" placeholder="Precio" step="0.01" required />
            <textarea class="inputs" v-model="nuevoPostre.description" placeholder="Descripción del postre" required></textarea>
  
            <label class="file-label">
              <input type="file" class="seleccionarArchivo" @change="handleFileUpload" required />
              Seleccionar Imagen 📷
            </label>
  
            <button class="guardarPostre" type="submit">💾 Guardar Postre</button>
          </form>
          <button class="cerrar" @click="formularioVisible = false">✖</button>
        </div>
      </div>
    </transition>
  </template>
  

<script>
import BotonesPostres from '../components/BotonesPostres.vue';

export default {
    components: {
        BotonesPostres
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
            formularioVisible: false
        };
    },
    methods: {
        mostrarFormulario() {
            this.formularioVisible = !this.formularioVisible;
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
                    const postreCreado = await response.json();
                    this.$emit('postreCreado', postreCreado);
                    this.postres.push(postreCreado);
                    this.nuevoPostre = {
                        name: '',
                        price: '',
                        description: '',
                        image_url: null,
                    };
                    this.formularioVisible = false;
                } else {
                    alert('Error al agregar el postre');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error al enviar la solicitud');
            }
        },
    },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.agregar{
    width: 70px;
}
.modal-content {
  background-color: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  max-height: 100%; 
   margin-bottom: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: popup 0.3s ease-out;
}

@keyframes popup {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.cerrar {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;
}

.cerrar:hover {
  color: #000;
}

.top-bar {
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
}

.top-bar>* {
    max-height: 50px;
    width: 180px;
}


.formulario {
    margin: 20px auto;
    max-width: 600px;
    padding: 30px;
    background-color: #fdfdfd;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.formulario h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
}

.inputs {
    width: 100%;
    height: 45px;
    padding: 10px 15px;
    margin: 10px 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    font-family: 'Segoe UI', sans-serif;
    transition: border 0.2s;
}

.inputs:focus {
    border-color: #4CAF50;
    outline: none;
}

textarea.inputs {
    height: 100px;
    resize: vertical;
}

.file-label {
    display: block;
    margin: 15px 0;
    padding: 12px;
    background-color: #e0f7fa;
    color: #00796b;
    border: 2px dashed #b2dfdb;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.file-label:hover {
    background-color: #b2ebf2;
}

.seleccionarArchivo {
    display: none;
}

.guardarPostre {
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    transition: background-color 0.3s ease;
}

.guardarPostre:hover {
    background-color: #45a049;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>