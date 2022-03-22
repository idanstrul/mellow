<template>
  <section v-if="board" class="board-details">
    <p>{{ board.title }}</p>
    <input type="text"
           v-model="board.title"  
    >
    <board-group v-for="group in board.groups" :key="group.id" :group="group"></board-group>
    <!-- <p>{{board.title}}</p> -->
  </section>
</template>

<script>

// import { boardService } from '../services/board.service.js'
import boardGroup from "../components/board-group.vue"

export default {
  name: 'board-details',
  data() {
    return {
      board: null,
    }
  },
  components: {
    boardGroup,
  },
  async created() {
    // const { id } = this.$route.params
    const boardId = 'b101'
    // console.log(id);
    const board = await this.$store.dispatch({type: 'loadCurrBoard', boardId})
    // const board = await boardService.getById(id)
    this.board = board
    console.log(board);
  },
  methods: {
  },
}
</script>
