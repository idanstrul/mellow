<template>
  <section class="board-list flex center column align-center">
    <h3>YOUR BOARDS</h3>
    <div class="board-list-container flex wrap">
      <label @click="$router.push(`/board/${b._id}`)" v-for="b in boards" :key="b._id" >
        <span class="board-title">
        {{b.title}}
        </span>
        <img v-if="b.style.bg.split('')[0]!=='#'" :src="b.style.bg" alt="">
        <div :style="{'background-color': `${b.style.bg}` }" v-else></div>
        </label>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      // boards: null

    }
  },
  async mounted(){
   const res = await this.$store.dispatch({type: 'loadBoards'})
    console.log(this.boards);
  },
  computed: {
    boards(){
     return this.$store.getters.boards
    }
  },
}
</script>

<style>

</style>