<template>
<section class="board-add-menu">
<custom-menu  :menuOpen="menuOpen">
   <p>Create board</p>
    <button @click="closeMenu" class="close" title="Close"></button>
   <hr>
   <section  class="board-add-container flex align-center column">
   <div :style="getBg" class="board-image-container flex center align-center"><img class="board-image" src="../assets/boardAdd.svg" alt=""></div>
   <div class="bg-selector">
   <p>Background</p>
   <div class="btn-bg-container">
     <form action="submit" @submit.prevent="">
   <button type="submit" v-for="(bg, idx) in boardToAdd.style.bgImg" :key="bg" @click="setBg(bg)">
   <label :idx="idx">
      <input name="bgImg" type="radio" style="appearance: none">
      <img class="bg-opt" :src="boardToAdd.style.bgImg[idx]" alt="">
   </label>
   </button>
   </form>
   </div>
   </div> 
    
   </section>
   <!-- <form action="submit" @submit.prevent="saveGroup" > -->
   <!-- <div>Name</div> -->
   <!-- <textarea style="resize: none" v-model="titleForDisplay"></textarea> -->
   <!-- <button>Create list</button> -->
   <!-- </form> -->
</custom-menu>
  </section>
</template>

<script>

import customMenu from "./custom-menu.vue"
import { boardService } from "../services/board.service"

export default {
  props: {
    menuOpen:Boolean,
  },
  data(){
    return {
      boardToAdd: null,
      boardBg: ''
    }
  },
  components: {
    customMenu
  },
  async created(){
    const board = await this.$store.dispatch({type: 'getEmptyBoard'})
    // const board = await boardService.getById(id)
    this.boardToAdd = board
    console.log(this.boardToAdd);
  },
  mounted() {
  },
  methods: {
    setBg(bg){
      this.boardBg=bg
      console.log(bg);
    },
    closeMenu(){
      this.$emit('closeMenu')
    }
  },
  computed: {
    getBg(){
      if(this.boardBg) return `background-image: url(${ this.boardBg
})`    }
  }
 
}
</script>

<style>

</style>