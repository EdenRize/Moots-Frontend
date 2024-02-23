import { createApp } from "vue";
import App from "./App.vue";
import routes from "../routes"; // Import your router instance
import { store } from "./store/store";
import "./scss/style.scss";

const app = createApp(App);

app.use(routes); // Use the router plugin
app.use(store);

app.mount("#app");
