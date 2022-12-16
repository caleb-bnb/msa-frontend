import { createApp } from 'vue'
import App from './App.vue'
// import Axios from 'axios';
import vuetify from './plugins/vuetify'
import routes from './routes';
import { loadFonts } from './plugins/webfontloader'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

/* Axios 전역설정 */
// App.prototype.$axios = Axios;

loadFonts()

createApp(App)
  .use(vuetify)
  .use(routes)
  .use(BootstrapVue3)
  .mount('#app')
