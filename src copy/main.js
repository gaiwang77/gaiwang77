// 載入create app函式
import { createApp } from "vue";
//載入根組件
import App from "./App.vue"
//建立VUE APP物件
const app=createApp(App);
//掛載到htmL標籤底下
app.mount("#app");