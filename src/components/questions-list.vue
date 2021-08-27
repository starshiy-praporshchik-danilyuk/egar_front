<template>
  <div>
    <table>
      <tr>
        <td v-for="question in questions" :key="question.id">{{question.phrasing}}</td>
      </tr>
    </table>
    <question-form :id_lesson="lesson" @pushQuestion="pushQuestion"/>
  </div>
</template>

<script>
import axios from "axios";
import QuestionForm from "./question-form";

export default {
  name: "questions-list",
  components: {QuestionForm},
  props: ['lesson'],
  /*watch: {
    lesson: function (){
      console.log(this.lesson);
      axios.get('http://localhost:8081/teacher/questions/' + this.lesson)
          .then(result => this.questions = result.data)
    }
  },*/
  created() {
    console.log(this.lesson);
    axios.get('http://localhost:8081/teacher/questions/' + this.lesson)
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