<script>
import {getAllStudents, searchByCriteria} from "@/service/StudentService";

export default {
  name: "StudentListTable",
  data() {
    return {
      students: [],
      currentStudent: null,
      criteria: {
        searchValue: null,
        propertyName: null,
      }
    }
  },
  methods: {
    getAllStudents() {
      getAllStudents().then(value => {
        console.log(value);
        this.students = value;
      });
    },
    searchByCriteria() {
      searchByCriteria(this.criteria).then(value => {
        console.log(value)
        this.students = value;
      })
    },
    clear() {
      this.getAllStudents();
      this.criteria = {
        searchValue: null,
        propertyName: null,
      }
    },
    navigate(path) {
      this.$router.push(`/${path}`)
    }
  },
  beforeMount() {
    this.getAllStudents()
  }
}

</script>

<template>
  <label>Search By</label>
  <input type="text" v-model="this.criteria.propertyName">
  <label>Search Criteria</label>
  <input type="text" v-model="this.criteria.searchValue">
  <br>
  <button v-on:click="searchByCriteria">Search</button>
  <button v-on:click="clear">Clear</button>
  <table>
    <tr>
      <th>id</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>emailAddress</th>
      <th>dateOfBirth</th>
      <th>cellNumber</th>
      <th>currentScore</th>
      <th>averageScore</th>
      <th>Actions</th>
    </tr>
    <tr v-if="this.students.length" v-for="student in this.students">
      <td>{{ student.id }}</td>
      <td>{{ student.firstName }}</td>
      <td>{{ student.lastName }}</td>
      <td>{{ student.emailAddress }}</td>
      <td>{{ student.dateOfBirth ? student.dateOfBirth.split("T")[0] : "" }}</td>
      <td>{{ student.cellNumber }}</td>
      <td>{{ student.currentScore ? student.currentScore + "%" : "" }}</td>
      <td>{{ student.averageScore ? student.averageScore + "%" : "" }}</td>
      <td>
        <button v-on:click="navigate(`score/${student.id}`)">Add score</button>
        <button v-on:click="navigate(`update/${student.id}`)">Update</button>
        <button v-on:click="navigate(`delete/${student.id}`)">Delete</button>
      </td>
    </tr>
    <tr v-if="!this.students.length">
      <td>No records</td>
    </tr>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}

th {
  font-weight: bold;
}

th, td {
  text-align: left;
  border: 1px solid red;
  padding: 10px;
}
</style>