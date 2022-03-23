<template>
<section class="group-menu">
 <Transition enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster">
 <div v-if="menuOpen" class="group-menu-container">
  
   <slot></slot>
 </div>
  </Transition>
  </section>
</template>

<script>
export default {
    props: {
    menuOpen:Boolean,
    },
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>