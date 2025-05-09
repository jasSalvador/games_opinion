import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


axios.defaults.baseURL=(`${process.env.VUE_APP_URL}games?key=${process.env.VUE_APP_KEY_RAWG}`)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
