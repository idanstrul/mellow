<template>
  <section class="app-header" :class="classBoardsPage">
    <nav class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/board/b101">/board/b101</router-link> |
      <router-link to="/board/b101/task/c104">/board/b101/task/c104</router-link>
    <div class="wh">
      <div class="btn-container" @click="goToBoardsPage">
        <span>Home</span>
      </div>
    </div>
    <button @click.stop="toggleBoardList" class="btn-container">
      <span>space dashboard</span>
      <span>Boards</span>
    </button>
    </nav>
    <div class="logo" @click="goToHomePage">
      <span class="material-icons-outlined logo-icon">space dashboard</span>
      <span>Mellow</span>
    </div>
    <div class="header-features">
      <button
        @click="toggleBoardCompose"
        class="material-icons-outlined btn-container">
        add
      </button>
      </div>
  </section>
</template>

<script>

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
    
  },
  methods: {
    toggleBoardCompose() {
      this.isBoardComposeOn = !this.isBoardComposeOn;
    },
    toggleBoardList() {
      this.isBoardListOpen = !this.isBoardListOpen;
    },
    hideBoardList(){
       this.isBoardListOpen = false;
    },
    hideUserMenu(){
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
      const style = {"background-color": 'whitesmoke' };
      this.setBackground(style)
      this.$router.push("/");
    },
    goToBoardsPage(){
      const style = {"background-color": 'whitesmoke' };
      this.setBackground(style)
         if(this.$route.path !== '/b'){
           this.$router.push("/b");
         }
        this.$store.commit({type:'setCurrBoard',board:null})
    },
    goToHomePage(){
      const style = {"background-color": 'whitesmoke' };
      this.setBackground(style)
        this.$router.push("/");
        this.$store.commit({type:'setCurrBoard',board:null})
    },
  },
  computed: {
    boards() {
      return this.$store.getters.boards;
    },
    classBoardsPage(){
      return {'isBoards-page': this.$route.path === '/b'}
    }
  },
};
</script>
