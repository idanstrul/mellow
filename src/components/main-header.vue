<template>
  <section class="main-header" :class="classBoardsPage">
    <button class="btn-boards" title="Boards"><img src="../assets/boards.png" alt=""></button>
    <button class="btn-logo" ><img src="../assets/logo.gif" alt=""></button>
    <nav class="btn-container">
      <router-link to="/about">About</router-link>|
      <router-link to="/board/b101/task/g102/c104">Board task</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/signup">Signup</router-link>
    </nav>
    <board-list
      v-if="isBoardListOpen"
      @closeBoardList="isBoardListOpen = false"
      @setBackground="setBackground"
      :boards="boards"
    />
    <div>
      <div class="btn-container" @click="goToBoardsPage">
        <span class="material-icons-outlined logo-icon"></span>
        <span>Boards</span>
      </div>
    </div>
    <div class="btn-container" @click="goToHomePage">
      <span class="material-icons-outlined logo-icon"></span>
      <span>Mellow</span>
      <div @click.stop="isUserMenuOpen = true" class="avatar">
        <!--user-avatar></!--user-avatar-->
        <user-menu
          v-if="isUserMenuOpen"
          :user="user"
          @logout="logout"
          @close="isUserMenuOpen = false"
        />
      </div>
    </div>
  </section>
</template>

<script>
import userAvatar from "../components/user-avatar.vue";
import boardCompose from "../components/board-compose.vue";
import boardList from "../components/board-list.vue";
import userMenu from "../components/user-menu.vue";

export default {
  data() {
    return {
      isBoardComposeOn: false,
      isBoardListOpen: false,
      user: null,
      isUserMenuOpen: false,
    };
  },
  components: {
    boardCompose,
    boardList,
    userMenu,
    userAvatar
  },
  methods: {
    toggleBoardCompose() {
      this.isBoardComposeOn = !this.isBoardComposeOn;
    },
    toggleBoardList() {
      this.isBoardListOpen = !this.isBoardListOpen;
    },
    hideBoardList() {
      this.isBoardListOpen = false;
    },
    hideUserMenu() {
      this.isUserMenuOpen = false;
    },
    addBoard(board) {
      this.$emit("addBoard", board);
      this.isBoardComposeOn = false;
    },
    setBackground(style) {
      this.$emit("setBackground", style);
    },
    async logout() {
      await this.$store.dispatch({ type: "logout" });
      const style = { "background-color": 'whitesmoke' };
      this.setBackground(style)
      this.$router.push("/");
    },
    goToBoardsPage() {
      const style = { "background-color": 'whitesmoke' };
      this.setBackground(style)
      if (this.$route.path !== '/board/b101') {
        this.$router.push("/board/b101");
      }
      this.$store.commit({ type: 'setCurrBoard', board: null })
    },
    goToHomePage() {
      const style = { "background-color": 'whitesmoke' };
      this.setBackground(style)
      this.$router.push("/");
      this.$store.commit({ type: 'setCurrBoard', board: null })
    },
  },
  computed: {
    boards() {
      return this.$store.getters.boards;
    },
    classBoardsPage() {
      return { 'isBoards-page': this.$route.path === '/b' }
    }
  },
};
</script>
