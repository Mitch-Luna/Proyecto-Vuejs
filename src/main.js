import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';

const pinia = createPinia()
const app = createApp(App);
app.use(router),
app.use(PrimeVue)
app.use(pinia)
app.mount('#app');



