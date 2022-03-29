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
   <button v-for="(bg, idx) in boardToAdd.style.bgImg" :key="idx" @click="setBg(bg)">
   <label :idx="idx">
      <input name="bgImg" type="radio" style="appearance: none">
      <img v-if="bg.split('')[0] !== '#'" class="bg-opt" :src="bg" alt="" :ref="bg">
      <div :style="getStyle(bg)" class="bg-opt clr" v-if="bg.split('')[0] == '#'" :ref="bg"></div>
   </label>
   </button>
   <p>Board title <span>*</span></p>
   <input placeholder="   " v-focus type="text">
   <!-- <div class="emoticon">👋 Board title is required</div> -->
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
    // console.log(this.boardToAdd);
  },
  mounted() {
  },
  methods: {
    setBg(bg){
      this.boardBg=bg
      for (const bg in this.$refs) {
        if(this.boardBg === bg){
          console.log(this.$refs[bg][0].classList);
          if(bg.split('')[0] === '#') 
          this.$refs[bg][0].classList.value = 'bg-opt clr checked'
          else
          this.$refs[bg][0].classList.value = 'bg-opt checked'
        } else{
          if(bg.split('')[0] === '#') 
          this.$refs[bg][0].classList.value = 'bg-opt clr'
          else
          this.$refs[bg][0].classList.value = 'bg-opt'
        } 
      }
    },
    closeMenu(){
      this.$emit('closeMenu')
    },
    getStyle(bg){
      // console.log(bg);
    return `background-color: ${bg}`
      // if (this.boardBg === )
    },
  },
  computed: {
    getBg(){
      if(this.boardBg){
        console.log(this.boardBg);
        if(this.boardBg.split('')[0] === '#')
        return `background-color: ${this.boardBg}` 
        return `background-image: url(${this.boardBg})` 
      }
    }
  },
 
}
</script>

<style>

</style>