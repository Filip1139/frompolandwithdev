import { createApp } from "vue";
import "./style.css";
import App from "./HomeView.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
