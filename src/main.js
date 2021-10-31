import App from './App.vue';
import Vue from 'vue';
import VueGtag from 'vue-gtag';
import vuetify from './plugins/vuetify.js';
import './plugins/vue-cookie.js';
import './plugins/axios.js';
import './plugins/global.js';
import './plugins/HotelDatePicker/HotelDatePicker.js';
import '../assets/styles/main.css';
import { i18n } from './plugins/i18n.js';
import { store } from './store/main.js';
Vue.config.devtools = false;
let id = 'UA-176424086-1';
let url = location.href;
url = url.substring(url.indexOf('.')).split('/')[0];

if (url == '.com') {
  id = 'UA-151388614-1';
}
Vue.use(VueGtag, {
  config: { id: id },
});

new Vue({
  el: '#app',
  vuetify,
  store,
  i18n,
  render: (h) => h(App),
});
