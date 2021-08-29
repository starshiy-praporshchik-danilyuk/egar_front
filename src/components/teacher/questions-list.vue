<template>
  <div>
    <h4>
      {{ theme }}
    </h4>
    <table>
      <tr v-for="question in questions" :key="question.id">
        <td>{{question.phrasing}}</td>
      </tr>
    </table>
    <question-form :id_lesson="lessonId" @pushQuestion="pushQuestion"/>
  </div>
</template>

<script>
import axios from "axios";
import QuestionForm from "./question-form";

export default {
  name: "questions-list",
  components: {QuestionForm},
  props: ['lessonId', 'theme'],
  created() {
    console.log(this.lessonId);
    axios.get('http://localhost:8081/teacher/questions/' + this.lessonId)
        .then(result => this.questions = result.data)
  },
  data() {
    return {
      questions: []
    }
  },
  methods: {
    pushQuestion(question){
      this.questions.push(question);
    }
  }
}
</script>

<style scoped>

</style>