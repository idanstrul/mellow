<template>
  <div class="board-header">
    <div class="board-members-section">
      <div class="board-section">
        <contenteditable
          v-if="isEditing"
          tag="h1"
          :contenteditable="true"
          v-model="boardTitleToEdit"
        />
        <h1
          v-else
          @click="isEditing = !isEditing"
        >
          {{ boardTitle }}
        </h1>
        <span
          :class="selected"
          ></span
        >
      </div>
      <div>
        <button 
          @click.stop="toggleMemberMenu"
        >
          Invite
        </button>
      </div>
    </div>
    <div class="menu-section">
      <button
      >
        <span> leaderboard </span>
      </button>
      <button
        @click.stop="isSideMenuOpen = true"
      >
        <span>More</span>
        <span>Show&nbsp;</span>
        <span>Menu</span>
      </button>
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
  },
};
</script>