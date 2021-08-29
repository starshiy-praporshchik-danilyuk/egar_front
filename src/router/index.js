import { createRouter, createWebHashHistory } from 'vue-router'
import lessonsList from '../components/teacher/lessons-list'
import questionsList from '../components/teacher/questions-list'
import studentsList from '../components/teacher/students-list'
import studentAnswers from '../components/teacher/student-answers'
import finishedLessonsList from '../components/student/finished-lessons-list'
import test from '../components/student/test'

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
  },
  {
    path: '/student/lessons',
    name: 'studentLesson',
    component: finishedLessonsList
  },
  {
    path: '/student/test',
    name: 'test',
    component: test,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;
