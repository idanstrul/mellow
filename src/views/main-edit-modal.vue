<template>
  <section class="main-edit-modal"> 
      <!-- v-clickoutside="closeModal" -->
      <header class="modal-header">
          <span class="modal-header-title">{{modalTitle}}</span>
          <button class="exit-btn" @click="closeModal"></button>
      </header>
      <main class="edit-modal-main">
      <slot></slot>
      </main>
  </section>
</template>

<script>
export default {
    name: 'main-edit-modal',
    props:{
        modalTitle: String
    },
    methods: {
        closeModal(){
            this.$store.commit({type: 'toggleEditModal', isOpen: false, editType: ''})
        }
    }

}
</script>

<style>

</style>