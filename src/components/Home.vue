<script>
import {ref} from "vue";
import StudentListTable from "@/components/StudentListTable.vue";
import CreateStudent from "@/components/CreateStudent.vue";

export default {
  name: "Home",
  components: {CreateStudent, StudentListTable},
  data() {
    return {
      tab: ref(1),
    }
  },
  methods: {
    changeTab(tabNumber) {
      this.tab = tabNumber;
    }
  }
}
</script>

<template>
  <button v-on:click="changeTab(1)">Search</button>
  <button v-on:click="changeTab(2)">Create</button>
  <div v-if="tab === 1">
    <StudentListTable/>
  </div>
  <div v-if="tab === 2">
    <CreateStudent/>
  </div>
</template>

<style scoped>

</style>