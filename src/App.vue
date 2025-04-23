<template>
  <div>
    <headerPostres />
    
  </div>
  <div>
    <RouterView />
  </div>
</template>

<script>
import headerPostres from './components/headerPostres.vue';

export default {
  name: 'App',
  components: {
    headerPostres
  }
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

</style>