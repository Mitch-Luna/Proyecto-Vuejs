<template>

  <body>
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
    <div class="carrusel">
      <ContenedorPostres
        imagen="https://th.bing.com/th/id/R.deffe97048c751f220d659004f272ada?rik=g6mjRE5ypRP8sg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-4E2I64KC63o%2fVFA_uBG7vLI%2fAAAAAAAAADk%2fa6W_PhUW4eY%2fw1200-h630-p-k-no-nu%2fdics.jpg&ehk=Ds%2feqMnxGwDJXeEAADjVJw4GC6aLhcwdsCfIE%2f89sWE%3d&risl=&pid=ImgRaw&r=0"
        nombre="Tarta de Chocolate" precio="40 córdobas"
        descripcion="Una deliciosa tarta de chocolate con crema y fresas." />
      <ContenedorPostres
        imagen="https://blogs.oximesa.es/wp-content/uploads/2017/11/Postres-deliciosos-y-saludables.jpg"
        nombre="Tarta de Chocolate" precio="40 córdobas"
        descripcion="Una deliciosa tarta de chocolate con crema y fresas." />
      <ContenedorPostres
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfw4G0wpSPny4LcaHYPILCpbik-3Em7vI17A&s"
        nombre="Tarta de Chocolate" precio="40 córdobas"
        descripcion="Una deliciosa tarta de chocolate con crema y fresas." />
      <ContenedorPostres
        imagen="https://previews.123rf.com/images/tacar/tacar0805/tacar080500005/2996905-deliciosos-postres-hechos-con-ingredientes-org%C3%A1nicos-seleccionados.jpg"
        nombre="Tarta de Chocolate" precio="40 córdobas"
        descripcion="Una deliciosa tarta de chocolate con crema y fresas." />
      <ContenedorPostres
        imagen="https://www.gastrolabweb.com/u/fotografias/m/2022/12/20/f960x540-39687_113762_5756.jpg"
        nombre="Tarta de Chocolate" precio="40 córdobas"
        descripcion="Una deliciosa tarta de chocolate con crema y fresas." />

    </div>
    
  </body>
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
  methods: {
    miFuncion() {
      alert('agregar postre');
    },
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
  /* columna por defecto (mobile) */
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
