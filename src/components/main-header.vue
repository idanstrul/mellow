<template>
    <section class="app-header">
        <nav class="nav">
      <div class="wh">
        <div class="btn-container"
          ><span>Home</span></div>
      </div>
      <button @click.stop="toggleBoardList" class="btn-container">
        <span>space dashboard</span>
        <span> Boards</span>
      </button>
    </nav>
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