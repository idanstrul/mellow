<template>
  <section v-if="board" class="board-details">
    <p>{{ board.title }}</p>
    <input type="text"
           v-model="board.title"  
    >
    <div class="flex">
    <board-group v-for="group in board.groups" :key="group.id" :group="group" @update="updateBoard"></board-group>
    </div>
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
   this.loadBoard()
  },
  methods: {
    async updateBoard(groupToSave){
      const idx =  this.board.groups.findIndex(g => g.id === groupToSave.id)
      this.board.groups[idx] = groupToSave
      await this.$store.dispatch({type: 'saveCurrBoard', boardToSave: this.board})
      this.loadBoard()
      // this.$store.dispatch.saveCurrBoard({boardToSave: this.board})
    },
    async loadBoard(){
       // const { id } = this.$route.params
    const boardId = 'b101'
    // console.log(id);
    const board = await this.$store.dispatch({type: 'loadCurrBoard', boardId})
    // const board = await boardService.getById(id)
    this.board = board
    }
  },
}
</script>
