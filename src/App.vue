<template>
  <section>
    <main-header></main-header>
    <router-view></router-view>
  </section>
</template>

<script>
import mainHeader from './components/main-header.vue'

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
    mainHeader
  },


}
</script>

<style>
</style>