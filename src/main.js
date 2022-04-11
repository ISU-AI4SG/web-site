import { createApp } from "vue";

import keyframes from "./style/keyframes.css";
import style from "./style/style.css";

import router from "./router";
import App from "./App.vue";

createApp(App).use(router).use(keyframes).use(style).mount("#app");
