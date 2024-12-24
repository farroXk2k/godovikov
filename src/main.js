import { createApp } from 'vue';
import 'typeface-open-sans';
import App from './App.vue';
import router from './router/router.js'; // Импортируйте маршрутизатор

const app = createApp(App);
app.use(router); // Используйте маршрутизатор
app.mount('#app');
