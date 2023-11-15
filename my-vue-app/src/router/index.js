// src/router/index.js

import Vue from 'vue'
import App from '@/App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'

// Components
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
