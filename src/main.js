
import Vue from 'vue';
import Lightbox from 'vue-my-photos';
import VueYoutube from 'vue-youtube';
import App from './App.vue';
import router from './router';

Vue.component('lightbox', Lightbox);

Vue.config.productionTip = false;

Vue.use(Lightbox);
Vue.use(VueYoutube);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
