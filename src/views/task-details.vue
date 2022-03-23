<template>
  <section class="task-details modal-screen">
    <div class="modal-container">
      <div v-if="false" class="cover"></div>
      <div class="modal-header">I'm a task details modal</div>
      <pre>{{currTask}}</pre>
      <pre>{{ currTaskLabels }}</pre>
      <div class="modal-main">
        <div v-if="true" class="notations">
          <trello-labels v-if="hasLabels" :labels="currTaskLabels"></trello-labels>
        </div>
        <div class="description"></div>
        <div v-if="false" class="attachments"></div>
        <div v-if="false" class="checklists"></div>
        <div class="activity-log"></div>
      </div>
      <div class="modal-sidebar">
        <button>Join</button>
        <span class="action-group">Add to card</span>
        <button>Members</button>
        <button>Labels</button>
        <button>Checklist</button>
        <button>Dates</button>
        <button>Attachment</button>
        <button>Cover</button>
        <span class="action-group">Actions</span>
        <button>Move</button>
        <button>Copy</button>
        <button>Archive</button>
      </div>
    </div>
  </section>
</template>

<script>
import trelloLabels from "../components/task-edit.cmps/trello-labels.vue"

export default {
  name: 'task-details',
  async created() {
    const taskId = this.$route.params.taskId
    const groupId = this.$route.params.groupId
    this.currTask = await this.$store.dispatch({ type: 'getTaskById', groupId, taskId })
    const boardLabels = this.$store.getters.currBoardLabels
    this.currTaskLabels = boardLabels.filter(label =>
      this.currTask.labelIds.includes(label.id))
  },
  data() {
    return {
      currTask: null,
      currTaskLabels: null
    }
  },
  computed: {
    hasLabels() {
      return (this.currTaskLabels && this.currTaskLabels.length > 0)
    }
  },
  components: {
    trelloLabels
  }
}
</script>

<style>
</style>