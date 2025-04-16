<template>
  <headerPostres msg="" />
  <div class="banner">
    <div class="banner-text">
      <h1>Bienvenidos a la Pastelería</h1>
      <p>Deliciosos postres para todos los gustos</p>
    </div>
    <img src="./assets/banner.webp" alt="Banner" class="banner-image" />
  </div>
  <ContenedorPostres 
  imagen="https://th.bing.com/th/id/R.deffe97048c751f220d659004f272ada?rik=g6mjRE5ypRP8sg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-4E2I64KC63o%2fVFA_uBG7vLI%2fAAAAAAAAADk%2fa6W_PhUW4eY%2fw1200-h630-p-k-no-nu%2fdics.jpg&ehk=Ds%2feqMnxGwDJXeEAADjVJw4GC6aLhcwdsCfIE%2f89sWE%3d&risl=&pid=ImgRaw&r=0" 
  nombre="Tarta de Chocolate"
precio="40 cordobas"
descripcion="Una deliciosa tarta de chocolate con crema y fresas."
  />

</template>

<script>
import ContenedorPostres from './components/ContenedorPostres.vue';
import headerPostres from './components/headerPostres.vue'

export default {
  name: 'App',
  components: {
    headerPostres,
    ContenedorPostres
  }
}
</script>

<style scoped>
/* Estilos base */
.banner {
  display: flex;
  flex-direction: column; /* columna por defecto (mobile) */
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
