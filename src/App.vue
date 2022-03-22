<template>
<section>
  <app-header></app-header>
  <router-view></router-view>
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
export default {
  name: 'app-vue',
  components: {
    appHeader
  }


}
</script>

<style>

</style>