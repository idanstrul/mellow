<template>
  <section v-if="currTask" class="task-details">
    <div class="modal-screen flex center">
      <div class="modal-container flex column center">
        <div v-if="false" class="cover"></div>
        <div class="modal-header section-title text-l icon-task-title">{{ currTask.title }}</div>
        <div class="flex-container flex space-between">
          <div class="modal-main">
            <div v-if="true" class="notations flex wrap">
              <trello-labels v-if="hasLabels" :labels="currTaskLabels"></trello-labels>
              <trello-members v-if="hasMembers" :members="currTask.members"></trello-members>
            </div>
            <div class="description">
              <span class="section-title text-m icon-description">Description</span>
              <trello-txt-input
                :txt="currTask.description"
                placeholder="Add a more detailed description…"
                @txt-saved="updateDesc"
                @txt-is-empty="updateDesc"
              ></trello-txt-input>
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
            <button class="btn side-bar">Join</button>
            <span class="action-group">Add to card</span>
            <button class="btn side-bar icon-members">Members</button>
            <button class="btn side-bar icon-labels">Labels</button>
            <button class="btn side-bar icon-checklist">Checklist</button>
            <button class="btn side-bar icon-dates">Dates</button>
            <button class="btn side-bar icon-attachment">Attachment</button>
            <button class="btn side-bar icon-cover">Cover</button>
            <span class="action-group">Actions</span>
            <button class="btn side-bar icon-move">Move</button>
            <button class="btn side-bar icon-copy">Copy</button>
            <button class="btn side-bar icon-archive">Remove</button>
          </div>
        </div>
        <!-- <pre>{{ currTask }}</pre> -->
        <!-- <pre>{{ currTaskLabels }}</pre> -->
      </div>
    </div>
  </section>
</template>

<script>
import trelloLabels from "../components/task-edit.cmps/trello-labels.vue"
import trelloMembers from "../components/task-edit.cmps/trello-members.vue"
import activityLog from "../components/task-edit.cmps/activity-log.vue"
import trelloChecklist from "../components/task-edit.cmps/trello-checklist.vue"
import trelloTxtInput from "../components/task-edit.cmps/trello-txt-input.vue"

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
    activityLog,
    trelloChecklist,
    trelloTxtInput
  }
}
</script>

<style>
</style>