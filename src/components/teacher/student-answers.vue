<template>
  <select v-model="selectedLesson">
    <option disabled value="">Выберите один из вариантов</option>
    <option v-for="lesson in lessons" :key="lesson.id">{{ lesson.id }}</option>
  </select>
  <table>
    <tr>
      <td>Вопрос</td><td>Ответ</td>
    </tr>
    <student-answer-row v-for="answer in answers" :answer="answer" :key="answer.id"></student-answer-row>
  </table>
</template>

<script>
import axios from "axios";
import StudentAnswerRow from "./student-answer-row";

export default {
  name: "student-answers",
  components: {StudentAnswerRow},
  props: ['login'],
  data(){
    return{
      selectedLesson: '',
      lessons: [],
      answers: []
    }
  },
  created(){
    axios.get('http://localhost:8081/teacher/lessons')
        .then(response => this.lessons = response.data);
  },
  watch: {
    selectedLesson: function(){
      axios.get('http://localhost:8081/teacher/answers/' + this.login + '/' + this.selectedLesson)
          .then(response => this.answers = response.data);
    }
  },
}
</script>

<style scoped>

</style>