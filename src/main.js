import Vue from 'vue'
import App from './App.vue'
import Vuebar from 'vuebar';
import VueResource from 'vue-resource'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(Vuebar);
Vue.use(VueResource);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
