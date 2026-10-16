import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Condicionales from '../views/Condicionales.vue'
import VShow from '../views/VShow.vue'
import VFor from '../views/VFor.vue'
import VBindKey from '../views/VBindKey.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio,
  },
  {
    path: '/condicionales',
    name: 'condicionales',
    component: Condicionales,
  },
  {
    path: '/v-show',
    name: 'v-show',
    component: VShow,
  },
  {
    path: '/v-for',
    name: 'v-for',
    component: VFor,
  },
  {
    path: '/v-bind-key',
    name: 'v-bind-key',
    component: VBindKey,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router