<template>
<section>
  <div v-if="isAddingGroup" @click="addGroup" class="group-add">
      <div class="flex align-center">
          <span>+</span>
          <span>Add another list</span>
     </div>
  </div>
  <div v-else class="group-edit">
      <form type="submit" @submit.prevent="saveGroup">
        <input type="text"
               ref="title"
               placeholder="Enter list title..."
               v-model="groupToAdd.title"
        >
        <div>
        <button>Add list</button>
        <button>X</button>
        </div>
          <!-- <span>+</span>
          <span>Add another list</span> -->
     </form>
  </div>
</section>
</template>

<script>

import { boardService } from '../services/board.service'

export default {
  props: {
    isAddingGroup: Boolean
  },
  data(){
    return {
      groupToAdd: boardService.getEmptyGroup()
    }
  },
  methods: {
    addGroup(){
      this.$emit('addGroup')
      this.$nextTick(() => {
        this.$refs.title.focus()
      })
    },
    saveGroup(){
      this.$emit('saveGroup', this.groupToAdd)
      this.groupToAdd = boardService.getEmptyGroup()
    }
  }
}
</script>

<style>

</style>