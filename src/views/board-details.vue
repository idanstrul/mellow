<template>
  <section v-if="board" class="board-details">
    <div class="bg"></div>
    <board-header
      :board="board"
    ></board-header>
    <router-view></router-view>
    
    <div class="group-list flex">
    <!-- <Container>  -->
  <Container
  group-name="cols"
    tag="div"

  orientation="horizontal"
  @drop="onColumnDrop($event)">
  <Draggable v-for="(group, idx) in board.groups" :key="group.id">
    <div>
    <board-group @move="move" :group="group" @updateGroup="updateGroup" @saveGroup="updateGroup">
      <Container
        orientation="vertical"
        group-name="col-items"
        :shouldAcceptDrop="(e, payload) =>  (e.groupName === 'col-items')"
        :get-child-payload="getCardPayload(group.id)"
        @drop="(e) => onCardDrop(group.id, e)">
    <task-preview 
    @due-soon="task.status='due-soon'"
    @in-progress="task.status='in-progress'"
    @over-due="task.status='over-due'"
    @done="task.status='done'"
    @saveTask="saveTask(task, idx)"
    @openLabels="labelsOpen=!labelsOpen"
    :groupIdx="idx" :labelsOpen="labelsOpen"
    @click="goToDetail(group, task)" 
    v-for="task in group.tasks" :key="task.id" :task="task">
    </task-preview>
      </Container>
    </board-group>
    </div>
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
import taskPreview from "../components/task-preview.vue";
  // import bg from '../../src/assets/bg.'
// import TaskPreview from "../components/task-preview.vue";

export default {
  name: 'board-details',
  data() {
    return {
      board: null,
      isAddingGroup: true,
      labelsOpen: false 
    }
  },
  components: {
    boardGroup,
    groupAdd,
    Container,
    Draggable,
    boardHeader,
    taskPreview
},
  async created() {
   await this.loadBoard()
   document.body.style=`
   background-image: url(${this.board.style.bg});
   background-color: ${this.board.style.bg};`
  },
  methods: {
    async saveTask(taskToSave, groupIdx){
      // console.log('hi');
      // console.log(taskToSave, groupIdx);
      const board = await this.$store.dispatch({type: 'updateTask', taskToSave, groupIdx})
      // this.loadBoard()
      // this.board = board
      // this.board.groups[groupIdx].tasks.findIndex(t => t.id === taskToSave.id)
      // this.updateGroup(this.board.groups[groupIdx])
      // await this.$store.dispatch({type: 'updateGroup', groupToSave})

      // const idx = this.board.groups.findIndex(g => g.id === groupId)
      // this.board.groups[idx].tasks
    },
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
    return board
    },
    onColumnDrop (dropResult) {
      const scene = Object.assign({}, this.board)
      console.log(scene);
      dropResult.payload = {}
      dropResult.payload.data = this.board.groups[dropResult.removedIndex].title
      dropResult.payload.id = this.board.groups[dropResult.removedIndex].id
      console.log('drop>>',dropResult);
      scene.groups = utilService.applyDrag(scene.groups, dropResult)
      this.board = scene
    },
   getCardPayload (groupId) {
      return index => {
        return this.board.groups.filter(p => p.id === groupId)[0].tasks[index]
      }
    },
    onCardDrop (groupId, dropResult) {
      console.log(dropResult);
      // check if element where ADDED or REMOVED in current collumn
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        
        const scene = Object.assign({}, this.board)
        const column = scene.groups.filter(p => p.id === groupId)[0]
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
        this.$emit('move', scene)
        // this.board = scene
      }
    },
    async move(boardToSave){
      const board = await this.$store.dispatch({type: 'saveCurrBoard', boardToSave})
      this.loadBoard()
    },
    goToDetail(group, task) {
      this.$router.push(`/board/b101/task/${group.id}/${task.id}`)
    },
     
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