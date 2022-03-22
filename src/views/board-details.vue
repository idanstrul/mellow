<template>
  <section  class="board-details">
    <!-- <p>{{ board.title }}</p> -->
    <p>bla bla</p>
  </section>
</template>

<script>

import { boardService } from '../services/board.service.js'

export default {
  name: 'board-details',
  data() {
    return {
      board: null,
    }
  },
  async created() {
    const { id } = this.$route.params
    console.log(id);
    const board = await boardService.getById(id)
    this.board = board
  },
  methods: {
  },
}
</script>
