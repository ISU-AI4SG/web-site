import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import style from "./style/keyframes.css";
createApp(App).use(router).use(style).mount("#app");
