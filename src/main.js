import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

import asios from '../src/common/axios/index';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
