import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import boardDetails from '../views/board-details.vue'
import taskDetails from '../views/task-details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/board/:boardId',
      name: 'board',
      component: boardDetails,
      children: [
        {
          path: 'task/:groupId/:taskId',
          name: 'task-details',
          component: taskDetails
        }
      ]
    }
  ]
})

export default router
