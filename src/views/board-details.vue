<template>
  <section v-if="board" class="board-details">
     <board-header
      :board="board"
    ></board-header>
    <router-view></router-view>
    <p>{{ board.title }}</p>
    <input type="text"
           v-model="board.title"  
    >
    <div class="group-list flex">
    <board-group v-for="group in board.groups" :key="group.id" :group="group" @updateGroup="updateGroup" @saveGroup="updateGroup"></board-group>
    <group-add @addGroup="isAddingGroup=false" @saveGroup="updateGroup" @closeGroupAdd="isAddingGroup=true" :isAddingGroup="isAddingGroup"></group-add>
    </div>
    <!-- <p>{{board.title}}</p> -->
  </section>
</template>

<script>

// import { boardService } from '../services/board.service.js'
import boardGroup from "../components/board-group.vue"
import groupAdd from "../components/group-add.vue"
import boardHeader from "../components/board-header.vue"

export default {
  name: 'board-details',
  data() {
    return {
      board: null,
      isAddingGroup: true 
    }
  },
  components: {
    boardGroup,
    groupAdd,
    boardHeader,
  },
  async created() {
   this.loadBoard()
  },
  methods: {
    async updateGroup(groupToSave){
      if(!this.isAddingGroup) this.isAddingGroup = true
      console.log(groupToSave);
      if(!groupToSave.title) return
      await this.$store.dispatch({type: 'updateGroup', groupToSave})
      this.loadBoard()
    },
    async loadBoard(){
       // const { id } = this.$route.params
    const boardId = 'b101'
    // console.log(id);
    const board = await this.$store.dispatch({type: 'loadCurrBoard', boardId})
    // const board = await boardService.getById(id)
    this.board = board
    },
  },
}
</script>
