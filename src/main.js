import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "reset-css";
import "@/styles.css";

createApp(App).use(router).mount("#app");
