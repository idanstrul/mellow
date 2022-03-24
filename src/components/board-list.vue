<template>
  <section class="board-list">
    <header class="header-list">
      <input
        ref="searchBoard"
        class="input-search-boards"
        type="text"
        placeholder="Find boards by name..."
        v-model="searchBoard"
        @input="setFilter"
      />
      <span @click="closeBoardList"
        >close</span
      >
    </header>
    <main>
      <section v-if="!searchBoard">
        <div v-if="boardsStarred.length">
          <h2 class="title">
            <span>STARRED BOARDS</span>
            <span
              v-if="!listClose.includes('boardsStarred')"
              @click="toggleListClose('boardsStarred')"
              >remove</span
            >
            <span
              v-else
              @click="toggleListClose('boardsStarred')"
              >add</span
            >
          </h2>
          <div class="main-list" v-if="!listClose.includes('boardsStarred')">
            <article
              v-for="board in boardsStarred"
              :key="board._id"
              class="board-preview"
              @click="openBoard(board)"
            >
              <div
                class="bgc"
                :style="{
                  backgroundImage: board.style['background-image'],
                  backgroundColor: board.style['background-color'],
                }"
              ></div>
              <div
                class="bgc-square"
                :style="{
                  backgroundImage: board.style['background-image'],
                  backgroundColor: board.style['background-color'],
                }"
              ></div>
              <span> {{ board.title }} </span>
              <span
                :class="{ selected: board.isStarred }"
                ></span
              >
            </article>
          </div>
        </div>

        <div class="list-recent">
          <h2 class="title">
            <span>RECENT BOARDS</span>
            <span
              v-if="!listClose.includes('recentBoards')"
              @click="toggleListClose('recentBoards')"
              >remove</span
            >
            <span
              v-else
              @click="toggleListClose('recentBoards')"
              >add</span
            >
          </h2>
          
          <div class="main-list" v-if="!listClose.includes('recentBoards')">
            <article
              v-for="board in recentBoards"
              :key="board._id"
              class="board-preview"
              @click="openBoard(board)"
            >
              <div
                class="bgc"
                :style="{
                  backgroundImage: board.style['background-image'],
                  backgroundColor: board.style['background-color'],
                }"
              ></div>
              <div
                class="bgc-square"
                :style="{
                  backgroundImage: board.style['background-image'],
                  backgroundColor: board.style['background-color'],
                }"
              ></div>
              <span> {{ board.title }} </span>
              <span
                :class="{ selected: board.isStarred }"
            ></span
              >
            </article>
          </div>
        </div>

        <div class="list-all">
          <h2 class="title">
            <span>ALL
            BOARDS</span>
            <span
              v-if="!listClose.includes('boards')"
              @click="toggleListClose('boards')"
              >remove</span
            >
            <span
              v-else
              @click="toggleListClose('boards')"
              >add</span
            >
          </h2>
          <div class="main-list" v-if="!listClose.includes('boards')">
            <article
              v-for="board in boards"
              :key="board._id"
              class="board-preview"
              @click="openBoard(board)"
            >
              <div
                class="bgc"
                :style="{
                  backgroundImage: board.style['background-image'],
                  backgroundColor: board.style['background-color'],
                }"
              ></div>
              <div
                class="bgc-square"
                :style="{
                  backgroundImage: board.style['background-image'],
                  backgroundColor: board.style['background-color'],
                }"
              ></div>
              <span> {{ board.title }} </span>
              <span
                :class="{ selected: board.isStarred }"
                ></span
              >
            </article>
          </div>
        </div>
      </section>
      <section class="search-list" v-else>
        <div class="main-list">
          <article
            v-for="board in boardsAfterFilter"
            :key="board._id"
            class="board-preview"
            @click="openBoard(board)"
          >
            <div
              class="bgc"
              :style="{
                backgroundImage: board.style['background-image'],
                backgroundColor: board.style['background-color'],
              }"
            ></div>
            <div
              class="bgc-square"
              :style="{
                backgroundImage: board.style['background-image'],
                backgroundColor: board.style['background-color'],
              }"
            ></div>
            <span> {{ board.title }} </span>
            <span
              :class="{ selected: board.isStarred }"
              ></span
            >
          </article>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  props: {
    boards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      recentBoards: null,
      listClose: [],
      searchBoard: "",
    };
  },
  created(){
     if(this.$store.getters.currBoard){
         this.$store.commit({ type: "addBoardToRecentBoards", board:(this.$store.getters.currBoard) });
     }
         this.recentBoards = this.$store.getters.recentBoards;
  },
  mounted() {
    this.$refs.searchBoard.focus();
  },
  methods: {
    closeBoardList() {
      this.$emit("closeBoardList");
    },
    openBoard(board) {
      this.$store.commit({ type: "addBoardToRecentBoards", board });
         if (!this.$store.getters.currBoard ||
          board._id !== this.$store.getters.currBoard._id) {
         this.$emit("setBackground", board.style);
         this.$store.commit({ type: "setCurrBoard", board });
         this.$router.push(`/b/${board._id}`);
         }
      this.closeBoardList();
    },
    toggleListClose(listName) {
      const listIdx = this.listClose.findIndex((list) => list === listName);
      if (listIdx === -1) {
        this.listClose.push(listName);
      } else {
        this.listClose.splice(listIdx, 1);
      }
    },
    setFilter() {
      this.$store.commit({
        type: "setFilterBy",
        filterBy: { txt: this.searchBoard },
      });
    },
  },
  computed: {
    boardsStarred() {
      return this.boards.filter((board) => board.isStarred);
    },
    boardsAfterFilter() {
      return this.$store.getters.boardsToShow;
    },
  },
};
</script>
