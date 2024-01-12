import { registerPlugins } from '@/plugins';
import App from './App.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import { createApp } from 'vue';
import "@/assets/css/main.css";

const app = createApp(App);

registerPlugins(app);

app.use(Toast).mount('#app');
