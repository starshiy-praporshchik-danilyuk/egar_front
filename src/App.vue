<template>
  <lessons-list  />
</template>

<script>
import LessonsList from './components/lessons-list.vue'

export default {
  name: 'App',
  components: {
    LessonsList
  },
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
