import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

import en from '@/lang/en'
import zh from '@/lang/zh'
import VueI18n from 'vue-i18n'

import asios from '../src/common/axios/index'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.use(VideoPlayer)
Vue.use(VueI18n)

const messages = {
  zh, en
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
