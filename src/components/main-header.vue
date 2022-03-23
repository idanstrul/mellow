<template>
  <section class="app-header">
    <nav class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/board/b101">/board/b101</router-link> |
      <router-link to="/board/b101/task/g102/c104">/board/b101/task/g102/c104</router-link>
    </nav>
    <div class="wh">
      <div class="btn-container">
        <span>Home</span>
      </div>
    </div>
    <button @click.stop="toggleBoardList" class="btn-container">
      <span>space dashboard</span>
      <span>Boards</span>
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isBoardListOpen: false,
    };
  },
  methods: {
    toggleBoardList() {
      this.isBoardListOpen = !this.isBoardListOpen;
    },
  },

}
</script>

<style>
</style>