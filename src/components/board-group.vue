<template>
 <section class="board-group">
   <div class="group-header ">
     <input type="text"
            v-model="group.title"
            class="group-title"
            @blur="updateGroup"
     >
     <button @click="toggleMenu" class="btn-group-menu" title="Open menu">
      <i class="fa-solid fa-ellipsis"></i>
    </button>
     <group-menu @copyGroup="menuOpen=false; subMenuOpen=true" @newTask="addTask" :menuOpen="menuOpen"></group-menu>
    <copy-group-menu @saveGroup="saveGroup" :menuOpen="subMenuOpen" :groupTitle="group.title"></copy-group-menu>
     </div>
     <task-add v-if="taskToEdit" :task="taskToEdit" @saveTask="saveTask"></task-add>
    <task-preview v-for="task in group.tasks" :key="task.id" :task="task"></task-preview>
 </section>
</template>

<script>

import taskPreview from "./task-preview.vue"
import groupMenu from "./group-menu.vue"
import copyGroupMenu from "./copy-group-menu.vue"
import taskAdd from "./task-add.vue"
import { boardService } from '../services/board.service'

export default {
  props: {
    group:{
        type: Object,
        required: true
    }
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
      copyGroupMenu
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
    }
  },
  computed: {
    
  }
}
</script>
