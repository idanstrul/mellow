<template>
  <section class="boards-page" :class="classToBoardPage">
    <div class="container">
    <h1 class="title">Choose Your Board</h1>
      <ul>
        <li v-for="board in boards" :key="board._id">
          <section
            @click="openBoard(board._id)"
            :style="{
              backgroundColor: board.style['background-color'],
              backgroundImage: board.style['background-image'],
            }"
          >
          </section>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  async created() {
    if (!this.boards) {
      try {
        await this.$store.dispatch({ type: "loadBoards" });
      } catch (err) {
        console.log("ERROR cannot load boards");
      }
    }
  },
  methods: {
    openBoard(boardId) {
      this.$router.push(`/board/${boardId}`);
    },
    boardTitleToShow(boardTitle) {
      if (boardTitle.length > 40) return boardTitle.substring(0, 40) + "...";
      else return boardTitle;
    },
    closeAddBoard() {
      this.isAddBoard = false;
    },
    async addBoard(board) {
      try {
        const newBoard = await this.$store.dispatch({
          type: "saveBoard",
          board,
        });
        this.$store.commit({ type: "setCurrBoard", board: newBoard });
        this.backgroundColor = board.style["background-color"];
        this.backgroundImg = board.style["background-image"];
        const activity = {
          txt: "created this board",
          byMember: this.$store.getters.getMyMiniUser,
        };
        await this.$store.dispatch({
          type: "addActivity",
          activity,
          boardId: newBoard._id,
        });
        this.$router.push(`/b/${newBoard._id}`);
      } catch (err) {
        console.log("ERROR cannot add board");
      }
    },
  },
  computed: {
    boards() {
      return this.$store.getters.boards;
    },
    classToBoardPage(){
       return {'isLessThen3Boards':this.boards.length <= 6,'isMoreThen3Boards': this.boards.length > 6}
    }
  },
};
</script>
