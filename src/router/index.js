import { createRouter, createWebHashHistory } from 'vue-router'
import lessonsList from '../components/lessons-list'
import questionsList from '../components/questions-list'
import studentsList from '../components/students-list'
import studentAnswers from '../components/student-answers'

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
  },
  {
    path: '/students',
    name: 'students',
    component: studentsList,
    props: true
  },
  {
    path: '/answers',
    name: 'answers',
    component: studentAnswers,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;
