<template>
  <tr>
    <td>{{ lesson.theme }}</td>
    <td>{{ new Date(lesson.lesDate).toLocaleDateString() }}</td>
    <router-link :to="{name: 'questions', params: {lesson: lesson.id}}">
<!--    <td><input type="button" @click="sendLessonId(lesson.id)" value="Открыть"/></td>-->
      <td><input type="button" value="Открыть"/></td>
    </router-link>
  </tr>
<!--    <questions-list :id_lesson="id_lesson"/>-->
</template>

<script>
//import QuestionsList from "./questions-list";
export default {
  name: "lesson-row",
  /*components: {QuestionsList},*/
  props: ['lesson'],
  /*data() {
    return {
      id_lesson: '1'
    }
  },*/
  /*methods: {
    sendLessonId: function (id) {
      this.id_lesson = id;
    }
  }*/
}
</script>

<style scoped>

</style>