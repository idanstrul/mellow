<template>
  <section>
    <!-- <board-details></board-details> -->
  <nav class="btn-container">
      <router-link to="/login">Login</router-link>|
      <router-link to="/signup">Signup</router-link>
    </nav>
  </section>
</template>

<script>

import boardDetails from "./board-details.vue"

export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    boardDetails
  }
}
</script>

<style>

</style>