<template>
 <section class="board-group">
   <div class="group-header">
     <input type="text"
            v-model="group.title"
            class="group-title"
            @blur="updateGroup"
     >
     <group-menu @newTask="addTask"></group-menu>
     </div>
     <task-add v-if="taskToEdit" :task="taskToEdit" @saveTask="saveTask"></task-add>
    <task-preview v-for="task in group.tasks" :key="task.id" :task="task"></task-preview>
 </section>
</template>

<script>

import taskPreview from "./task-preview.vue"
import groupMenu from "./group-menu.vue"
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
      taskToEdit: null
    }
  },
  components: {
      taskPreview,
      groupMenu,
      taskAdd
},
  methods: {
    updateGroup(){
        this.$emit('update', this.group)
    },
    addTask(){
      this.taskToEdit = boardService.getEmptyTask()
     console.log(this.taskToEdit);
  
    },
    saveTask(taskToSave){
      this.group.tasks.unshift(taskToSave)
      this.updateGroup()
    }
  },
}
</script>
