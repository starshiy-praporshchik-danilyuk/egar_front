<template>
  <tr>
    <td>{{student.login}}</td>
    <td>{{student.name}}</td>
    <td>{{student.surname}}</td>
    <router-link :to="{name: 'answers', params: {login: student.login}}">
      <td><input type="button" value="Ответы"/></td>
    </router-link>
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