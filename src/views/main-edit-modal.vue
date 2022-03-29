<template>
  <section class="main-edit-modal">
      <header class="modal-header">
          <span class="modal-header-title">{{modalTitle}}</span>
          <button class="exit-btn" @click.stop="closeModal"></button>
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
            this.$store.commit({type: 'toggleEditModal', status: false})
        }
    }

}
</script>

<style>

</style>