<template>
  <div>
    <table>
      <student-row v-for="student in students" :key="student.login" :student="student"/>
    </table>
  </div>
</template>

<script>

import axios from "axios";
import StudentRow from "./student-row";

export default {
  name: "students-list",
  components: {StudentRow},
  data(){
    return{
      students: []
    }
  },
  created(){
    axios.get('http://localhost:8081/teacher/students')
    .then(response => this.students = response.data)/*then(response => console.log(response.data))*/;
  }
}
</script>

<style scoped>

</style>