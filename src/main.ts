import { createApp } from 'vue';
import App from './App.vue';
import routes from '../routes'; // Import your router instance
import './scss/style.css';

const app = createApp(App);

app.use(routes); // Use the router plugin

app.mount('#app');
