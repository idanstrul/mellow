<template>
  <section>
    <!-- <main-edit-modal v-if="isEditModalOpen" modal-title="Hello">
      <labels-edit></labels-edit>
    </main-edit-modal> -->
    <main-header></main-header>
    <router-view></router-view>
  </section>
</template>

<script>
import mainHeader from './components/main-header.vue'
import mainEditModal from './views/main-edit-modal.vue'
import labelsEdit from './components/main-edit-modal.cmps/labels-Edit.vue'

export default {
  name: 'app-vue',
  created() {
    window.addEventListener('click', (ev) => {
      const elMainEditModal = document.querySelector('.main-edit-modal')
      if (!elMainEditModal || !elMainEditModal.contains(ev.target)){
        this.$store.commit({type: 'toggleEditModal', status: true})
      }
      console.log(!elMainEditModal || !elMainEditModal.contains(ev.target))
    })
  },
  computed: {
    isEditModalOpen() {
      return this.$store.getters.isEditModalOpen
    }
  },
  components: {
    mainHeader,
    mainEditModal,
    labelsEdit
  },


}
</script>

<style>
</style>