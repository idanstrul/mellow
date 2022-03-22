<template>
  <app-header></app-header>
  <router-view>

  </router-view>
</template>

<script>
import appHeader from './components/app-header.cmp.vue'
export default {
  name: 'app-vue',
  components: {
    appHeader
  }


}
</script>

<style>

</style>