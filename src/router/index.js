import { createRouter, createWebHashHistory } from 'vue-router'
import lessonsList from '../components/lessons-list'
import questionsList from '../components/questions-list'

const routes = [
  {
    path: '/',
    name: 'lessons',
    component: lessonsList,
    props: true
  },
  {
    path: '/questions',
    name: 'questions',
    component: questionsList,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;