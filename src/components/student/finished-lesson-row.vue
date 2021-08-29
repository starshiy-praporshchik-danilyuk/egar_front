<template>
  <tr>
    <td>{{ lesson.theme }}</td>
    <td>{{ new Date(lesson.lesDate).toLocaleDateString() }}</td>
    <router-link :to="{name: 'test', params: {lessonId: lesson.id, theme: lesson.theme}}">
      <td><input type="button" value="Пройти тест"/></td>
    </router-link>
  </tr>
</template>

<script>
export default {
  name: "finished-lesson-row",
  props: ['lesson']
}
</script>

<style scoped>

</style>