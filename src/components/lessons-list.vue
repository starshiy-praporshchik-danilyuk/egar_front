<template>
  <div>
    <table>
      <tr><td>Тема</td><td>Дата</td><td>Вопросы</td></tr>
      <lesson-row v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
    </table>
    <lesson-form :lessons="lessons"/>
  </div>
</template>


<script>
import LessonRow from "../components/lesson-row";
import LessonForm from "./lesson-form";
//import axios from "axios";

export default {
  name: "lessons-list",
  components: {
    LessonForm,
    LessonRow
  },
  props: ['lessons'],
}
</script>

<style>

</style>