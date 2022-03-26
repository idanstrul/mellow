<template>
  <!-- <Container> -->
  <section v-if="board" class="board-details">
     <!--board-header
      :board="board"
    ></!--board-header-->
    <router-view></router-view>
    <p>{{ board.title }}</p>
    <input type="text"
           v-model="board.title"  
    >
    <div class="group-list flex">
    <!-- <Container     orientation="horizontal"
> 
    <Draggable> -->
    <board-group v-for="group in board.groups" :key="group.id" :group="group" @updateGroup="updateGroup" @saveGroup="updateGroup"></board-group>
    <!-- </Draggable>
    </Container> -->
    <group-add @addGroup="isAddingGroup=false" @saveGroup="updateGroup" @closeGroupAdd="isAddingGroup=true" :isAddingGroup="isAddingGroup"></group-add>
    </div>
    <!-- <p>{{board.title}}</p> -->
  </section>
  <!-- </Container> -->
</template>

<script>

// import { boardService } from '../services/board.service.js'
import { Container, Draggable } from "vue3-smooth-dnd";

import boardGroup from "../components/board-group.vue"
import groupAdd from "../components/group-add.vue"
//import boardHeader from "../components/board-header.vue"

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
    Container,
    Draggable,
    //boardHeader,
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
    onColumnDrop (dropResult) {
      const scene = Object.assign({}, this.scene)
      scene.children = applyDrag(scene.children, dropResult)
      this.scene = scene
    },
     getCardPayload (groupId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    }
  },
}
</script>
<style>
/** NB: dont remove, 
* When using orientation="horizontal" it auto sets "display: table"
* In this case we need flex and not display table  
*/
.smooth-dnd-container.horizontal{
  /* display: flex !important; */
}
</style>