<template>
  <div class="homepage">
     <section class="header-home">
      <div class="logo">
         <span class="material-icons-outlined logo-icon"></span>Mellow
      </div>
      <nav class="homepage-nav">
         <router-link to='/login' class="login">Log in</router-link>
         <span> | </span>
         <router-link to='/signup' class="signup">Sign up</router-link>
      </nav>
    </section>
    <div class="layout">
    <main class="main-home-page">
    <section class="started">
       <p class="txt-title"> Administer your strategy Collaborate with coworkers and friends unquestionably and effectively</p>
      <button class="start-btn" @click="goToBoardsPage">Get Started</button>
    </section>

   
</main>
</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  created() {},
  methods: {
    async goToBoardsPage() {
      await this.$store.dispatch({ type: "goToBoardsPage" });
      this.$router.push("/board/b101");
    },
  },
};
</script>