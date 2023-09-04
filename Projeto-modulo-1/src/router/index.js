import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import NewStudent from '../views/NewStudent/NewStudent.vue'
import ListStudent from '../views/ListStudent/ListStudent.vue'
import Exercises from '../views/Exercises/Exercises.vue'
import TrainingRegister from '../views/TrainingRegister/TrainingRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/student/new',
      name: 'NewStudent',
      component: NewStudent
    },
    {
      path: '/student/list',
      name: 'ListStudent',
      component: ListStudent
    },
    {
      path: '/exercises',
      name: 'Exercises',
      component: Exercises
    },
    {
      path: '/training/register',
      name: 'TrainingRegister',
      component: TrainingRegister
    }
    
  ]
})

export default router
