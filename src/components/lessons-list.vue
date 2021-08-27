<template>
  <div align="center">
    <table>
      <tr><td>Тема</td><td>Дата</td><td>Вопросы</td></tr>
      <lesson-row v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
    </table>
    <lesson-form :lessons="lessons" @pushLesson="pushLesson"/>
    <router-link :to="{name: 'students'}">
      <td><input type="button" value="Список студентов"/></td>
    </router-link>
  </div>
</template>


<script>
import LessonRow from "../components/lesson-row";
import LessonForm from "./lesson-form";
import axios from "axios";

export default {
  name: "lessons-list",
  components: {
    LessonForm,
    LessonRow
  },
  data(){
    return{
      lessons: [],
    }
  },
  created() {
    axios.get('http://localhost:8081/teacher/lessons')
        .then(response => this.lessons = response.data);
  },
  methods: {
    pushLesson(lesson){
      this.lessons.push(lesson);
    }
  }
}
</script>

<style>

</style>