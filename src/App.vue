<template>
  <section>
    <main-edit-modal v-if="editModalStatus.isOpen" modal-title="Hello">
      <component :is="editModalStatus.editType" :currTask="editModalStatus.currTask"></component>
      <!-- <date-edit></date-edit> -->
    </main-edit-modal>
    <main-header></main-header>
    <router-view></router-view>
  </section>
</template>

<script>
import mainHeader from './components/main-header.vue'
import mainEditModal from './views/main-edit-modal.vue'
import labelsEdit from './components/main-edit-modal.cmps/labels-Edit.vue'
import membersEdit from './components/main-edit-modal.cmps/members-edit.vue'
import checklistsEdit from './components/main-edit-modal.cmps/checklists-edit.vue'
import dateEdit from './components/main-edit-modal.cmps/date-edit.vue'

export default {
  name: 'app-vue',
  // created() {
  //   window.addEventListener('click', (ev) => {
  //     const elMainEditModal = document.querySelector('.main-edit-modal')
  //     if (!elMainEditModal || !elMainEditModal.contains(ev.target)){
  //     }
  //     console.log(!elMainEditModal || !elMainEditModal.contains(ev.target))
  //   })
  // },
  computed: {
    editModalStatus() {
      return this.$store.getters.editModalStatus
    }
  },
  components: {
    mainHeader,
    mainEditModal,
    labelsEdit,
    membersEdit,
    checklistsEdit,
    dateEdit
  },


}
</script>

<style>
</style>