<script>
import {getStudentId, updateStudent} from "@/service/StudentService";

export default {
  name: "UpdateStudent",
  data() {
    return {
      id: null,
      firstName: null,
      lastName: null,
      emailAddress: null,
      dateOfBirth: null,
      cellNumber: null,
      student: null,
      errors: {
        firstName: null,
        lastName: null,
        emailAddress: null,
        dateOfBirth: null,
        cellNumber: null,
      },
    }
  },
  methods: {
    updateStudent() {
      this.student = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        dateOfBirth: this.dateOfBirth,
        cellNumber: this.cellNumber,
      }

      updateStudent(this.student).then(value => {
        console.log(value)
        this.clearErrors();

        if (value.body.status === "BAD_REQUEST") {
          value.body.errors.forEach(error => this.errors[error.field] = error.message);
        } else if (value.status === 200) {
          console.log(`created user: ${value.body}`);
          this.$router.back();
        }
        console.log(this.errors)
      })
    },
    clearErrors() {
      this.errors.firstName = null;
      this.errors.lastName = null;
      this.errors.emailAddress = null;
      this.errors.dateOfBirth = null;
      this.errors.cellNumber = null;
    },
    populateStudentFromRes(value) {
      this.id = value.id;
      this.firstName = value.firstName;
      this.lastName = value.lastName;
      this.emailAddress = value.emailAddress;
      this.dateOfBirth = value.dateOfBirth ? value.dateOfBirth.split('T')[0] : null;
      this.cellNumber = value.cellNumber;
      this.student = value.student;
    }
  },
  beforeMount() {
    getStudentId(this.$router.currentRoute.value.params.id)
        .then((value) => this.populateStudentFromRes(value));
  }
}

</script>

<template>
  <h1>Create New Student</h1>

  <label>First Name *</label>
  <input v-model="firstName" type="text">
  <p v-if="this.errors.firstName">{{ this.errors.firstName }}</p>
  <br>
  <label>Last Name *</label>
  <input v-model="lastName" type="text">
  <p v-if="this.errors.lastName">{{ this.errors.lastName }}</p>
  <br>
  <label>Mobile Number *</label>
  <input v-model="cellNumber" type="text">
  <p v-if="this.errors.cellNumber">{{ this.errors.cellNumber }}</p>
  <br>
  <label>Email Address *</label>
  <input v-model="emailAddress" type="text">
  <p v-if="this.errors.emailAddress">{{ this.errors.emailAddress }}</p>
  <br>
  <label>Date of Birth *</label>
  <input v-model="dateOfBirth" type="date">
  <p v-if="this.errors.dateOfBirth">{{ this.errors.dateOfBirth }}</p>
  <br>
  <button v-on:click="updateStudent()">Save</button>
  <button v-on:click="this.$router.back()">Cancel</button>
</template>

<style scoped>

</style>
