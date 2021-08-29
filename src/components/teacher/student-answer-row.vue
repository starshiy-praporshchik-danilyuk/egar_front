<template>
  <tr>
    <td>{{ questionPhrasing }}</td><td>{{ answer.phrasing }}</td>
  </tr>
</template>

<script>
import axios from "axios";

export default {
  name: "student-answer-row",
  props: ['answer'],
  data(){
    return{
      questionPhrasing: ''
    }
  },
  created(){
    axios.get('http://localhost:8081/student/questions' + this.answer.question) //на бэке запрос работает не правильно, скоро исправлю
        .then(response => this.questionPhrasing = response.data);
  }
}
</script>

<style scoped>

</style>