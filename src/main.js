import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VideoPlayer from 'vue-video-player'

import VueLazyLoad from 'vue-lazyload'

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
Vue.use(VueLazyLoad, {
  loading: './assets/logo.png'
})

const messages = {
  zh, en
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  };
  next();
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
