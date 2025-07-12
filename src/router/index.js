import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import limbo from '../views/limbo.vue'

const routes = [
  { path: '/', name: 'Signup', component: Signup },
  { path: '/home', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/forgot', name: 'Forgot', component: Forgot },
  { path: '/limbo', name: 'limbo', component: limbo }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router