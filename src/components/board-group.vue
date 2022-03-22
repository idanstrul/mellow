<template>
 <section class="board-group">
     <input type="text"
            v-model="group.title"
            class="group-title"
     >
    <task-preview v-for="task in group.tasks" :key="task.id" :task="task"></task-preview>
 </section>
</template>

<script>

import taskPreview from "./task-preview.vue"

export default {
  props: {
    group:{
        type: Object,
        required: true
    }
  },
  components: {
      taskPreview
},
  methods: {
    
  },
}
</script>
