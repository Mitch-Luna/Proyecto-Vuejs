<template>
    <BotonesPostres texto="Eliminar" color="rgb(205, 92, 92)" :accion="EliminarElemento" />
  </template>
  
  <script>
  import BotonesPostres from '@/components/BotonesPostres.vue';
  
  export default {
    name: "EliminarPostre",
    props: {
      id: {
        type: String,
        required: true,
      }
    },
    components: {
      BotonesPostres
    },
    methods: {
      async EliminarElemento() {
        if (!confirm("¿Estás seguro de que deseas eliminar este postre?")) return;
  
        try {
          const response = await fetch(`http://localhost:4000/desserts/${this.id}`, {
            method: "DELETE",
          });
  
          if (response.ok) {
            alert("Postre eliminado exitosamente");
            // Podés emitir un evento para que el componente padre actualice la lista
            this.$emit('postreEliminado', this.id);
          } else {
            alert("Error al eliminar el postre");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Ocurrió un error al conectarse con el servidor");
        }
      },
    },
  };
  </script>
  

<style>

</style>