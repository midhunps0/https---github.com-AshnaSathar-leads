import "./global.css";
import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";
import axios from "axios";

window.axios = axios;
window.axios.defaults.withCredentials = true;
window.axios.defaults.withXSRFToken = true;

const app = HMR(App, { target: document.body }, "routify-app");

export default app;
