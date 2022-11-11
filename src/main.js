import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SvgIcon from "vue3-icon";
createApp(App).mount('#app').component("svg-icon", SvgIcon);
