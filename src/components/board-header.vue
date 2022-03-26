<template>
  <div class="board-header">
    <button class="btn-boards-drop"><img src="../assets/boardDrop.png" alt=""></button>
    <h2 class="board-title" contenteditable="true">{{ board.title }}</h2>
    <button class="btn-star-board"><div></div></button> <span class="nav-divider">|</span>
    <button class="btn-user-space"><h4>{{ userWorkspace }} Workspace</h4></button>
    <div class="board-members-section">
      <!--div class="board-section">
        <contenteditable
          v-if="isEditing"
          tag="h1"
          :contenteditable="true"
          v-model="boardTitleToEdit"/>
        <h1
          v-else
          @click="isEditing = !isEditing">
          {{ boardTitle }}
        </h1>
      </div-->
      <div class="board-section">
        <!--section class="user-avatar">
          <user-avatar></user-avatar>
        </@section-->
        <!-- <button class="board-header-btn">
          Invite
        </button> -->
      </div>
    </div>
    <!-- <div class="board-section">
      <button class="board-header-btn">
        <span> Laderboard </span>
      </button>
      <button class="board-header-btn">
        <span>Show menu</span>
      </button>
    </div> -->
  </div>
</template>

 <script>
import userAvatar from "../components/user-avatar.vue";

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
      //isEditing: true,
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
    userWorkspace(){
      const name = this.board.createdBy.fullname.split(' ')
      // const lName = this.board.createdBy.fullname.split(' ')
      // console.log(name[1].split());
      return name[0] +' ' +  name[1].split('')[0] + `'s`
    }
  },
  created() {
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
  },
  components: {
    userAvatar,
  },
};
</script>