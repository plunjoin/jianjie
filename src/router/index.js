import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/make',
    name: 'make',
    component: function () {
      return import("../views/Make")
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
    path: "/detail/:id",
    name: 'detail',
    component: function () {
      return import('../views/children/detail')
    }, props: true
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
    path: '/thingdatail/:id',
    name: 'thingdatail',
    component: function () {
      return import('../views/children/thingDatail')
    }, props: true
  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
