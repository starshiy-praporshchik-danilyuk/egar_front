<template>
  <div>
    <table>
      <tr>
        <td>Тема</td><td>Дата</td><td></td>
      </tr>
      <finished-lesson-row v-for="lesson in lessons" :key="lesson.id" :lesson="lesson"></finished-lesson-row>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import FinishedLessonRow from "./finished-lesson-row";

export default {
  name: "finished-lessons-list",
  components: {FinishedLessonRow},
  data(){
    return {
      lessons: []
    }
  },
  created(){
    axios.get('http://localhost:8081/student/lessons')
        .then(response => this.lessons = response.data);
  }
}
</script>

<style scoped>

</style>