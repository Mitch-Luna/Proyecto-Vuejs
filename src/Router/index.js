import { createRouter, createWebHistory } from 'vue-router';

import SobreNosotros from '@/views/SobreNosotros.vue';
import HomePostre from '@/views/HomePostre.vue';
import contadorVue from '@/components/contadorVue.vue';
import ListasTareas from '@/components/ListasTareas.vue';
import RegistroView from '@/views/RegistroView.vue';

const routes = [
  {
    path: '/',
    component: HomePostre
  },
  {
    path: '/SobreNosotros',

    component: SobreNosotros,
    children:[
      {
        path: '/contador-vue',
    
        component: contadorVue
      },
      {
        path: '/listas-tareas',
    
        component: ListasTareas
      },
      {
        path: '/registro-view',
    
        component: RegistroView
      }
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
