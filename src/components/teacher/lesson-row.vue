<template>
  <tr>
    <td>{{ lesson.theme }}</td>
    <td>{{ new Date(lesson.lesDate).toLocaleDateString() }}</td>
    <router-link :to="{name: 'questions', params: {lessonId: lesson.id, theme: lesson.theme}}">
      <td><input type="button" value="Открыть"/></td>
    </router-link>
  </tr>
</template>

<script>
export default {
  name: "lesson-row",
  props: ['lesson'],
}
</script>

<style scoped>

</style>