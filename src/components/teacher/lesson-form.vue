<template>
  <div>
    <h3>Добавить лекцию</h3>
    <input type="text" v-model="name" />
    <input type="text" v-model="link" />
    <input type="button" value="Создать" @click="save" />
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "lesson-form",
  props: {
    lessons: Array,
  },
  data() {
    return {
      name: '',
      link: ''
    }
  },
  methods: {
    save: function (){
      var lesson = {theme: this.name, link: this.link};
      axios.post('http://localhost:8081/teacher/lessons', lesson)
      .then(response => this.$emit("pushLesson", response.data));
    }
  }
}
</script>

<style scoped>

</style>