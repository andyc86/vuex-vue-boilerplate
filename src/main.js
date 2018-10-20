import Vue from "vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import store from '../store/index';
import App from "./App.vue";
import routes from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: "history", routes });

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})