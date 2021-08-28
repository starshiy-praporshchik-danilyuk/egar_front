<template>
  <select v-model="selectedLesson">
    <option disabled value="">Выберите один из вариантов</option>
    <option v-for="lesson in lessons" :key="lesson.id">{{ lesson.id }}</option>
  </select>
</template>

<script>
import axios from "axios";

export default {
  name: "student-answers",
  props: ['login'],
  data(){
    return{
      selectedLesson: '',
      lessons: []
    }
  },
  created(){
    axios.get('http://localhost:8081/teacher/lessons')
        .then(response => this.lessons = response.data);
  },
  watch: {
    selectedLesson: function(){
      axios.get('http://localhost:8081/teacher/answers/' + this.login + '/' + this.selectedLesson)
          .then(response => console.log(response.data));
    }
  },
}
</script>

<style scoped>

</style>