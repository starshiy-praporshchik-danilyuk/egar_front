<template>
  <div>
    <tr>
      <td>{{ question.phrasing }}</td>
      <td><input type="text" v-model="phrasingAnswer" /></td>
      <td><input type="button" value="Сохранить" @click="save" /></td>
    </tr>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "test-row",
  props: ['question'],
  data(){
    return{
      phrasingAnswer: ''
    }
  },
  methods: {
    save: function (){
      var answer = {question: this.question.id, phrasing: this.phrasingAnswer};
      axios.post('http://localhost:8081/student/answers', answer).then(response => console.log(response.data));
    }
  }
}
</script>

<style scoped>

</style>