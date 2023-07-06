<script>
import {deleteStudent} from "@/service/StudentService";

export default {
  name: "DeleteStudent",
  data() {
  },
  methods: {
    deleteStudent() {
      deleteStudent(this.$router.currentRoute.value.params.id).then(value => {
        console.log(value)
        this.$router.back();
        alert(`deleted user`)
      })
    }
  },
}

</script>

<template>
  <h1>Delete Student</h1>

  <p>You are about to delete student: <u>{{ this.$router.currentRoute.value.params.id }}</u>. Continue?</p>
  <button v-on:click="deleteStudent()">DELETE</button>
  <button v-on:click="this.$router.back()">Cancel</button>
</template>

<style scoped>

</style>
