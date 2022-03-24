<template>
<section class="group-menu">
<custom-menu  :menuOpen="menuOpen">
   <h4>Copy list</h4>
   <hr>
   <form action="submit" @submit.prevent="saveGroup" >
   <p>Name</p>
   <textarea style="resize: none" v-model="titleForDisplay"></textarea>
   <button>Create list</button>
   </form>
</custom-menu>
  </section>
</template>

<script>

import customMenu from "./custom-menu.vue"

export default {
  props: {
    menuOpen:Boolean,
    groupTitle: String
  },
  data(){
    return {
        titleForDisplay: JSON.parse(JSON.stringify(this.groupTitle))
    }
  },
  components: {
    customMenu
  },
  mounted() {
  },
  methods: {
    addTask(){
      this.$emit('newTask')
    },
    saveGroup(){
      this.$emit('saveGroup', this.titleForDisplay)
    },
    focusMe(){
      
      }
  },
 
}
</script>

<style>

</style>