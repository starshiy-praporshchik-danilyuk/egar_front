<template>
  <lessons-list :lessons="lessons" />
</template>

<script>
import LessonsList from './components/lessons-list.vue'
import axios from "axios";

export default {
  name: 'App',
  components: {
    LessonsList
  },
  data: function() {
    return {
      lessons: []
  };
},
  created() {
    axios.get('http://localhost:8081/teacher/lessons')
        .then(response => this.lessons = response.data);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
