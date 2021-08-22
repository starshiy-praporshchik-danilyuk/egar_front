<template>
  <div>
  <input type="text" v-model="phrasing" />
  <input type="button" value="Save" @click="save" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "question-form",
  props: ['id_lesson'],
  data(){
    return{
      phrasing: ''
    }
  },
  methods: {
    save: function (){
      var question = {lesson: this.id_lesson, phrasing: this.phrasing};
      axios.post('http://localhost:8081/teacher/questions', question)
          .then(response => console.log(response.data));
    }
  }
}
</script>

<style scoped>

</style>