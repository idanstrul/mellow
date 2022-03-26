<template>
  <section v-if="board" class="board-details">
    <!-- <board-header
      :board="board"
    ></board-header> -->
    <router-view></router-view>
    <p>{{ board.title }}</p>
    <input type="text"
           v-model="board.title"  
    >
    <div class="group-list flex">
    <!-- <Container>  -->
  <Container
  group-name="cols"
  orientation="horizontal"
  @drop="onColumnDrop($event)">
  <Draggable v-for="group in board.groups" :key="group.id">
    <board-group @move="move" :board="board" :group="group" @updateGroup="updateGroup" @saveGroup="updateGroup"></board-group>
  </Draggable>
    </Container>
    <!-- <Container 
    :group="group"
    orientation="vertical"
    group-name="col-items"
    :shouldAcceptDrop="(e, payload) =>  (e.groupName === 'col-items')"
    :get-child-payload="getCardPayload(group.id)"
    @drop="(e) => onCardDrop(group.id, e)">
  </Container> -->
    <!-- </Container> -->
    <group-add @addGroup="isAddingGroup=false" @saveGroup="updateGroup" @closeGroupAdd="isAddingGroup=true" :isAddingGroup="isAddingGroup"></group-add>
    </div>
    <!-- <p>{{board.title}}</p> -->
  </section>
</template>

<script>

// import { boardService } from '../services/board.service.js'
import { Container, Draggable } from "vue3-smooth-dnd";
import { utilService } from "../services/util.service";
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
    Container,
    Draggable,
    boardHeader,
  },
  async created() {
   this.loadBoard()
  },
  methods: {
    async updateGroup(groupToSave){
      if(!this.isAddingGroup) this.isAddingGroup = true
      // console.log(groupToSave);
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
      console.log(dropResult);
      const scene = Object.assign({}, this.board)
      scene.groups = utilService.applyDrag(scene.groups, dropResult)
      this.board = scene
    },
    getCardPayload (groupId) {
      return index => {
        return this.board.groups.filter(p => p.id === groupId)[0].tasks[index]
      }
    },
    onCardDrop (columnId, dropResult) {
      
      // check if element where ADDED or REMOVED in current collumn
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        
        const scene = Object.assign({}, this.board)
        const column = scene.groups.filter(p => p.id === columnId)[0]
        const itemIndex = scene.groups.indexOf(column)
        const newColumn = Object.assign({}, column)
        
        // check if element was ADDED in current column
        if((dropResult.removedIndex == null && dropResult.addedIndex >= 0)){
          // your action / api call
          // dropResult.payload.loading = true
          // simulate api call
          // setTimeout(function(){ dropResult.payload.loading = false }, (Math.random() * 5000) + 1000); 
        }
        
        newColumn.tasks = utilService.applyDrag(newColumn.tasks, dropResult)
        scene.groups.splice(itemIndex, 1, newColumn)
        this.board = scene
      }
    },
    move(board){
      this.board = board
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
  display: flex !important;
}
</style>