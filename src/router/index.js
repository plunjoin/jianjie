import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'opening',
    component: function () {
      return import('../views/Opening');
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About')
    }
  },
  {
    path: '/night',
    name: 'night',
    component: function () {
      return import('../views/NightFeast')
    }
  },
  {
    path: '/buildgarden',
    name: 'buildgarden',
    component: function () {
      return import("../views/buildgarden")
    },
    children: []
  }, {
    path: '/space',
    name: 'space',
    component: function () {
      return import('../views/Space')
    }
  }, {
    path: '/thing',
    name: 'thing',
    component: function () {
      return import("../views/Thing")
    }
  },
  {
    path: "/detail",
    name: 'detail',
    component: function () {
      return import('../views/children/detail')
    }
  }, {
    path: '/makechild',
    name: 'makechild',
    component: function () {
      return import('../views/children/MakeChild')
    }
  }, {
    path: '/spacelist',
    name: 'spacelist',
    component: function () {
      return import('../views/children/spaceList')
    }
  }, {
    path: '/spacedatail',
    name: 'spacedatail',
    component: function () {
      return import('../views/children/spaceDatail')
    }
  }, {
    path: '/thingdatail',
    name: 'thingdatail',
    component: function () {
      return import('../views/children/thingDatail')
    }
  }, {
    path: '/lianxi',
    name: 'lianxi',
    component: function () {
      return import('../views/lianxi')
    }, props: true
  }, {
    path: '/tiaowen',
    name: 'tiaowen',
    component: function () {
      return import('../views/tiaowen')
    }, props: true
  }, {
    path: '/map',
    name: 'map',
    component: function () {
      return import('../views/map')
    }
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
