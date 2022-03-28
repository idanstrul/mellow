<template>
  <div class="custom-menu">
    <div>
      <Transition enter-active-class="animate__animated animate__slideInRight">
        <div v-if="menuOpen" class="custom-menu-container"></div>
      </Transition>
    </div>
   </div>
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

