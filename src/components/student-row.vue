<template>
  <tr>
    <td>{{student.login}}</td>
    <td>{{student.name}}</td>
    <td>{{student.surname}}</td>
  </tr>
</template>

<script>
export default {
  name: "student-row",
  props: ['student']
}
</script>

<style scoped>

</style>