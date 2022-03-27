<template>
       <!-- <Container
        orientation="vertical"
        group-name="col-items"
        :shouldAcceptDrop="(e, payload) =>  (e.groupName === 'col-items')"
        :get-child-payload="getCardPayload(group.id)"
        @drop="(e) => onCardDrop(group.id, e)"> -->
  <!-- <Draggable> -->
 <section class="board-group">
   <div class="group-header ">
     <input type="text"
            v-model="group.title"
            class="group-title"
            @blur="updateGroup"
     >
     <button @click="toggleMenu" class="btn-group-menu" title="Menu"></button>
     <group-menu @copyGroup="menuOpen=false;  subMenuOpen=true" @closeMenu="menuOpen=false" @newTask="addTask" :menuOpen="menuOpen"></group-menu>
    <copy-group-menu @saveGroup="saveGroup" @closeMenu="subMenuOpen=false" :menuOpen="subMenuOpen" :groupTitle="group.title"></copy-group-menu>
     </div>
     <task-add v-if="taskToEdit" :task="taskToEdit" @saveTask="saveTask"></task-add>
     <div class="tasks-container">
       <slot></slot>
       <!-- <Container>
    <task-preview v-for="task in group.tasks" :key="task.id" :task="task"></task-preview>
    </Container> -->
    </div>
    <div class="flex align-center task-add">
          <span></span>
          <span>Add a card</span>
     </div>
 </section>
 <!-- </Draggable> -->
    <!-- </Container> -->
</template>

<script>

import taskPreview from "./task-preview.vue"
import groupMenu from "./group-menu.vue"
import copyGroupMenu from "./copy-group-menu.vue"
import taskAdd from "./task-add.vue"
import { utilService } from "../services/util.service"
import { boardService } from '../services/board.service'
import { Container, Draggable } from "vue3-smooth-dnd";


export default {
  props: {
    group:{
        type: Object,
        required: true
    },
    
  },
  data() {
    return {
      taskToEdit: null,
      menuOpen: false,
      subMenuOpen: false,
    }
  },
  components: {
      taskPreview,
      groupMenu,
      taskAdd,
      copyGroupMenu,
      Container,
      Draggable,
},
  methods: {
    toggleMenu(){
      this.menuOpen = !this.menuOpen
      if(this.subMenuOpen) {
        this.subMenuOpen = !this.subMenuOpen
        this.menuOpen = false
      }
    },
    updateGroup(){
        this.$emit('updateGroup', this.group)
    },
    addTask(){
      this.taskToEdit = boardService.getEmptyTask()
      this.menuOpen = false
     console.log(this.taskToEdit);
  
    },
    saveTask(taskToSave){
      if(taskToSave.title){
        this.group.tasks.unshift(taskToSave)
        this.updateGroup()
      }
      this.taskToEdit = null
    },
    saveGroup(title){
      const groupToCopy = JSON.parse(JSON.stringify(this.group))
      groupToCopy.title = title
      groupToCopy.id = ''
      this.menuOpen = false
      this.subMenuOpen = false
      this.$emit('saveGroup', groupToCopy)
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
    }
  },
  computed: {
    
  }
}
</script>
