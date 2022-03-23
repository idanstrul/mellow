<template>
<section class="group-menu">
  <button @click="menuOpen = !menuOpen" class="btn-menu " title="Open menu">
  <i class="fa-solid fa-ellipsis"></i>
 </button>
 <Transition enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster">
 <div v-if="menuOpen" class="group-menu-container">
   <h4>List actions</h4>
   <hr>
   <p @click="addTask">Add card...</p>
   <p>Copy list...</p>
   <hr>
   <p>Archive this list...</p>
 </div>
  </Transition>
  </section>
</template>

<script>
export default {
  data(){
    return {
      menuOpen: false
    }
  },
  methods: {
    addTask(){
      this.$emit('newTask')
      // console.log('adding');

    }
  }
}
</script>

<style>

</style>