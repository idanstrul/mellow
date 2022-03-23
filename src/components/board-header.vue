<template>
  <div class="board-header">
    <div class="board-members-section">
      <div class="board-section">
        <contenteditable
          v-if="isEditing"
          class="board-header-btn title-board"
          tag="h1"
          :contenteditable="true"
          v-model="boardTitleToEdit"
          :noNL="false"
          :noHTML="true"
          @keypress.enter="updateTitle"
          @input="updateTitle"
        />
        <h1
          v-else
          class="board-header-btn title-board"
          @click="isEditing = !isEditing"
        >
          {{ boardTitle }}
        </h1>
        <span
          class="material-icons-round board-header-btn star"
          @click="toggleStar"
          :class="selected"
          >star_outline</span
        >
      </div>
      <span class="seperator">|</span>
      <div class="members-section">
        <button
          class="board-header-btn invite-btn"
          @click.stop="toggleMemberMenu"
        >
          Invite
        </button>
      </div>
    </div>
    <div class="menu-section">
      <button
        class="board-header-btn menu-section dashboard"
        @click="openDashboard"
      >
        <span class="material-icons-outlined"> leaderboard </span>
      </button>
      <button
        class="board-header-btn menu-section"
        @click.stop="isSideMenuOpen = true"
      >
        <span class="material-icons title">More</span>
        <span class="word-show">Show&nbsp;</span>
        <span class="word-menu">menu</span>
      </button>
      <transition name="slide">
        <sideMenu
          v-if="isSideMenuOpen"
          :board="board"
          class="popup"
          @updateMembers="updateMembers"
          @close="isSideMenuOpen = false"
          @setBackground="setBackground"
          @openDeletePopup="openDeletePopup"
        />
      </transition>
    </div>
  </div>
</template>

 <script>

export default {
  props: {
    board: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      boardTitleToEdit: null,
      isEditing: true,
      isMembersMenuOpen: false,
      isSideMenuOpen: false,
    };
  },
  computed: {
    selected() {
      return { selected: this.board.isStarred };
    },
    users() {
      return this.$store.getters.users;
    },
    boardTitle() {
      return JSON.parse(JSON.stringify(this.board.title));
    },
  },
  created() {
    this.updateTitle = debounce(this.updateTitle, 2000);
  },
  watch: {
    boardTitle: {
      immediate: true,
      handler() {
        this.boardTitleToEdit = this.boardTitle;
      },
    },
  },
  methods: {
    setBackground(style) {
      this.$emit("setBackground", style);
    },
    toggleMemberMenu() {
      this.isMembersMenuOpen = !this.isMembersMenuOpen;
    },
    closeMembersMenu() {
      this.isMembersMenuOpen = false;
    },
    closeSideMenu() {
      this.isSideMenuOpen = false;
    },
    toggleStar() {
      this.$emit("toggleStar");
    },
    updateTitle() {
      this.isEditing = false;
      this.$emit("updateTitle", this.boardTitleToEdit);
    },
    updateMembers(members) {
      this.$emit("updateMembers", members);
    },
    openDeletePopup(){
       this.$emit('openDeletePopup')
    },
    openDashboard() {
      this.$emit("openDashboard");
    },
  },
  components: {
  },
};
</script>