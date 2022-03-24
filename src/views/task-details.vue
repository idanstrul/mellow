<template>
  <section v-if="currTask" class="task-details">
    <div class="modal-screen flex center">
      <div class="modal-container flex column center">
        <div v-if="false" class="cover"></div>
        <div class="modal-header">I'm a task details modal</div>
        <div class="flex-container flex space-between">
          <div class="modal-main">
            <div v-if="true" class="notations flex wrap">
              <trello-labels v-if="hasLabels" :labels="currTaskLabels"></trello-labels>
              <trello-members v-if="hasMembers" :members="currTask.members"></trello-members>
            </div>
            <div class="description">
              <task-description :description="currTask.description" @updated="updateDesc"></task-description>
            </div>
            <div v-if="false" class="attachments"></div>
            <div v-if="true" class="checklists">
              <trello-checklist
                v-for="checklist in currTask.checklists"
                :key="checklist.id"
                :checklist="checklist"
              ></trello-checklist>
            </div>
            <div class="activity-log">
              <activity-log :comments="currTask.comments"></activity-log>
            </div>
          </div>
          <div class="modal-sidebar flex column">
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
        <pre>{{ currTask }}</pre>
        <pre>{{ currTaskLabels }}</pre>
      </div>
    </div>
  </section>
</template>

<script>
import trelloLabels from "../components/task-edit.cmps/trello-labels.vue"
import trelloMembers from "../components/task-edit.cmps/trello-members.vue"
import taskDescription from "../components/task-edit.cmps/task-description.vue"
import activityLog from "../components/task-edit.cmps/activity-log.vue"
import trelloChecklist from "../components/task-edit.cmps/trello-checklist.vue"

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
  methods: {
    updateDesc(updatedDesc) {
      console.log('updatedDesc', updatedDesc);
      this.currTask.description = updatedDesc
    }
  },
  computed: {
    hasLabels() {
      return (this.currTaskLabels && this.currTaskLabels.length > 0)
    },
    hasMembers() {
      if (!this.currTask) return
      return (this.currTask.members && this.currTask.members.length > 0)
    }
  },
  components: {
    trelloLabels,
    trelloMembers,
    taskDescription,
    activityLog,
    trelloChecklist
  }
}
</script>

<style>
</style>