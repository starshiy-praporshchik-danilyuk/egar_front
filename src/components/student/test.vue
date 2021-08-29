<template>
  <div>
    <table>
      <tr>
        <td>Вопрос</td><td>Ответ</td><td></td>
      </tr>
      <test-row v-for="question in questions" :key="question.id" :question="question"></test-row>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import TestRow from "./test-row";

export default {
  name: "test",
  components: {TestRow},
  props: ['lessonId', 'theme'],
  data(){
    return {
      questions: [],
      answers: []
    }
  },
  created(){
    axios.get('http://localhost:8081/student/questions/' + this.lessonId)
        .then(response => this.questions = response.data);
  }
}
</script>

<style scoped>

</style>