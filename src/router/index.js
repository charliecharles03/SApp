import { createRouter, createWebHistory } from 'vue-router'

import UserProfile from '../components/subcomps/UserProfile.vue'

import HomeComponent from '../components/subcomps/HomeComponent.vue'
import PlaylistComponent from '../components/subcomps/PlaylistComponent.vue'

const routes = [
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile

  },
  {
    path: '/home',
    name: 'HomeComponent',
    component: HomeComponent
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/playlist',
    name: 'PlayListComponent',
    component: PlaylistComponent

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
