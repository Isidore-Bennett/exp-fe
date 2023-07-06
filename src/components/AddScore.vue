<script>
import {addScore} from "@/service/ScoreService";

export default {
  name: "AddScore",
  data() {
    return {
      scoreValue: null,
      scoreError: null,
    }
  },
  methods: {
    addScore() {
      this.score = {
        studentId: this.$router.currentRoute.value.params.id,
        score: this.scoreValue,
      }

      addScore(this.score).then(value => {
        console.log(value)
        if (value.status === "BAD_REQUEST") {
          this.scoreError = value.errors[0].message;
          this.scoreValue = null;
        } else if (value.status === 200) {
          this.$router.back();
        }
        console.log(value.body)
        console.log(value.status)
        console.log(`score added: ${value}`)
      })
    }
  },
}

</script>

<template>
  <h1>Add Score</h1>
  <label>Current Score</label>
  <input v-model="scoreValue" type="text">
  <p v-if="scoreError">{{ scoreError}}</p>
  <br>
  <button v-on:click="addScore()">Save</button>
  <button v-on:click="this.$router.back()">Cancel</button>
</template>

<style scoped>

</style>
