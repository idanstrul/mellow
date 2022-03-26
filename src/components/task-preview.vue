<template>
<!-- <Container> -->
  <Draggable>
<section class="task-preview" >
<p>{{ task.title }}</p>
<section v-if="task.members" class="task-members flex">
  <user-avatar v-for="m in task.members" :key="m._id" :user="m"></user-avatar>
</section>
</section>
</Draggable>
<!-- </Container> -->
</template>

<script>

import userAvatar from "./user-avatar.vue"
import { Container, Draggable } from "vue3-smooth-dnd";


export default {
  name: 'task-preview',
  props: {
    task: Object,
  },
  components: {
    userAvatar,
    Container, 
    Draggable
  },
  methods: {
    
  },
}
</script>
