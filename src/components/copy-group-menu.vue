<template>
<section class="group-menu">
<custom-menu  :menuOpen="menuOpen">
   <h4>Copy list</h4>
   <hr>
   <p>Name</p>
   <textarea style="resize: none"></textarea>
   <button>Create list</button>
</custom-menu>
  </section>
</template>

<script>

import customMenu from "./custom-menu.vue"

export default {
  props: {
    menuOpen:Boolean
  },
  data(){
    return {
    }
  },
  components: {
    customMenu
  },
  methods: {
    addTask(){
      this.$emit('newTask')
      // this.menuOpen = false
      // console.log('adding');
    },
    copyGroup(){
      
    }
  }
}
</script>

<style>

</style>