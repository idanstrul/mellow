<template>
<!-- <Container> -->
  <Draggable>
<section class="task-preview">
  <section v-if="task.labelIds" class="task-labels">
    <span @click.stop="toggleLabels" @mouseover="hover=true" @mouseleave="hover=false" v-for="l in task.labelIds" :key="l" class="task-preview-label" :class="getClass" :style="getStyle(l)"><span>{{ getLabelText(l) }}</span></span>
  </section>
<p>{{ task.title }}</p>
<section class="task-preview-date ">
  <div class="start-only flex align-center center" v-if="task.startDate && !task.dueDate">
    <span></span>
    <span>Starts: {{ startDate }}</span>
  </div>
  <div class="start-only flex align-center center" v-if="!task.startDate && task.dueDate">
    <span></span>
    <!-- <span>Starts: {{ startDate }}</span> -->
  </div>
</section>
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
import { utilService } from "../services/util.service";
import format from 'date-fns/format'

export default {
  name: 'task-preview',
  props: {
    task: Object,
    labelsOpen: Boolean
  },
  components: {
    userAvatar,
    Container, 
    Draggable
  },
  data(){
    return {
      hover: false,
      open: true,
    }
  },
  methods: {
    
    getStyle(labelId){
      
      const boardLabels = this.$store.getters.currBoardLabels
      const label = boardLabels.find(label => label.id === labelId)
      // console.log(label);
      if(this.hover)
      return `background-color: ${utilService.lightenDarkenColor(label.color, -60)}`
      return `background-color: ${label.color}`
    },
    getLabelText(labelId){
      const boardLabels = this.$store.getters.currBoardLabels
      const label = boardLabels.find(label => label.id === labelId)
      // console.log(label);
      return `${label.title}`
    },
    toggleLabels(){
      this.$emit('openLabels')
      this.open = !this.open
    }
  },
  computed: {
    getClass(){
      return this.labelsOpen ? 'open' : 'close'
    },
    startDate(){
      return format(this.task.startDate, 'MMM d')
    }
  }
}
</script>
