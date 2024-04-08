import { createRouter, createWebHistory } from 'vue-router'

import UserProfile from '../components/subcomps/UserProfile.vue'

import HomeComponent from '../components/subcomps/HomeComponent.vue'
import CreatorComponent from '../components/subcomps/Creator/CreatorComponent.vue'
import PlaylistComponent from '../components/subcomps/PlaylistComponent.vue'
import LoginView from '../components/LoginView.vue'

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
    name : 'Login',
    component: LoginView
  },
  {
    path: '/playlist',
    name: 'PlayListComponent',
    component: PlaylistComponent

  },
  {
    path: '/creator',
    name: 'CreateComponent',
    component: CreatorComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
