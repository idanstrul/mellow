<template>
  <div class="board-header">
    <div class="board-members-section">
      <div class="board-section">
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
      </div>
      <div>
        <button class="board-header-btn">
          Invite
        </button>|
      </div>
    </div>
    <div class="board-section">
      <button class="board-header-btn">
        <span> Laderboard </span>
      </button>|
      <button class="board-header-btn"
        @click.stop="isSideMenuOpen = true">
        <span>Show menu</span>
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