<script>
import {createStudent} from "@/service/StudentService";

export default {
  name: "CreateStudent",
  data() {
    return {
      firstName: null,
      lastName: null,
      emailAddress: null,
      dateOfBirth: null,
      cellNumber: null,
      currentScore: null,
      student: null,
      errors: {
        firstName: null,
        lastName: null,
        emailAddress: null,
        dateOfBirth: null,
        cellNumber: null,
        currentScore: null,
      },
    }
  },
  methods: {
    createStudent() {
      this.student = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        dateOfBirth: this.dateOfBirth,
        cellNumber: this.cellNumber,
        currentScore: this.currentScore
      }

      createStudent(this.student).then(value => {
        console.log(value)
        this.clearErrors();

        if (value.status === "BAD_REQUEST") {
          value.errors.forEach(error => this.errors[error.field] = error.message);
        } else if (value.status === 200) {
          console.log(`created user: ${value}`);
          this.$router.back();
        }
        console.log(this.errors)
      });
    },
    clear() {
      this.firstName = null;
      this.lastName = null;
      this.emailAddress = null;
      this.dateOfBirth = null;
      this.cellNumber = null;
      this.currentScore = null;
      this.student = null;
    },
    clearErrors() {
      this.errors.firstName = null;
      this.errors.lastName = null;
      this.errors.emailAddress = null;
      this.errors.dateOfBirth = null;
      this.errors.cellNumber = null;
      this.errors.currentScore = null;
    }
  },
  beforeMount() {
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
  <label>Current Score</label>
  <input v-model="currentScore" type="text">
  <p v-if="this.errors.currentScore">{{ this.errors.currentScore }}</p>
  <br>
  <button v-on:click="createStudent()">Save</button>
  <button v-on:click="clear()">Cancel</button>
</template>

<style scoped>

</style>
