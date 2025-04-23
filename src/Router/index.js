import { createRouter, createWebHistory } from 'vue-router';

import SobreNosotros from '@/views/SobreNosotros.vue';
import HomePostre from '@/views/HomePostre.vue';

const routes = [
  {
    path: '/',
    component: HomePostre
  },
  {
    path: '/SobreNosotros',

    component: SobreNosotros
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
