<template>
  <section v-if="currTask" class="task-details">
    <div class="modal-screen flex center" @click="closeModal">
      <div @click.stop class="modal-container flex column center">
        <div v-if="false" class="cover"></div>
        <button class="exit-btn" @click="closeModal"></button>
        <div class="modal-header section-title text-l icon-task-title">{{ currTask.title }}</div>
        <div class="flex-container flex space-between">
          <div class="modal-main">
            <div v-if="true" class="notations flex wrap">
              <trello-members v-if="hasMembers" :members="currTask.members"></trello-members>
              <trello-labels v-if="hasLabels" :labels="currTaskLabels"></trello-labels>
              <trello-dates
                v-if="currTask.dueDate"
                :dueDate="currTask.dueDate"
                :status="currTask.status"
              ></trello-dates>
            </div>
            <div class="description">
              <span class="section-title text-m icon-description">Description</span>
              <trello-txt-input
                class="make-btn"
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
                @updated="updateChecklist"
              ></trello-checklist>
            </div>
            <div class="activity-log">
              <activity-log :comments="currTask.comments" @updated="updateComments"></activity-log>
            </div>
          </div>
          <div class="modal-sidebar flex column">
            <button class="btn side-bar">Join</button>
            <span class="secondary-section-title">Add to card</span>
            <button class="btn side-bar icon-members" @click="openEditModal('members-edit')">Members</button>
            <button class="btn side-bar icon-labels" @click="openEditModal('labels-edit')">Labels</button>
            <button
              class="btn side-bar icon-checklist"
              @click="openEditModal('checklists-edit')"
            >Checklist</button>
            <button class="btn side-bar icon-dates" @click="openEditModal('dates-edit')">Dates</button>
            <button
              class="btn side-bar icon-attachment"
              @click="openEditModal('attachment-edit')"
            >Attachment</button>
            <button class="btn side-bar icon-cover" @click="openEditModal('cover-edit')">Cover</button>
            <span class="secondary-section-title">Actions</span>
            <button class="btn side-bar icon-move" @click="openEditModal('move-edit')">Move</button>
            <button class="btn side-bar icon-copy" @click="openEditModal('copy-edit')">Copy</button>
            <button class="btn side-bar icon-archive" @click="openEditModal('')">Remove</button>
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
import trelloDates from "../components/task-edit.cmps/trello-dates.vue"

export default {
  name: 'task-details',
  async created() {
    const taskId = this.$route.params.taskId
    const groupId = this.$route.params.groupId
    this.currTask = await this.$store.dispatch({ type: 'getTaskById', groupId, taskId })
    if (!this.currTask.labelIds) return
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
    async saveCurrTask() {
      await this.$store.dispatch({
        type: 'saveTask',
        groupId: this.$route.params.groupId,
        taskToSave: JSON.parse(JSON.stringify(this.currTask))
      })
      console.log('Current task saved!');
      /// This function returns a promise with the value of 
      //the current board. I'm not sure if methods 
      //inside this component that call SaveCurrTask 
      //should wait for this promise to resolve or not. 
      //if it will cuase problems with saving tasks this 
      //could be the reason 
    },
    updateDesc(updatedDesc) {
      console.log('updatedDesc', updatedDesc);
      this.currTask.description = updatedDesc
      this.saveCurrTask()
    },
    updateChecklist(updatedChecklist) {
      // console.log('updatedChecklist', updatedChecklist);
      const idx = this.currTask.checklists.findIndex(cl => cl.id === updatedChecklist.id)
      this.currTask.checklists[idx] = updatedChecklist
      this.saveCurrTask()
    },
    updateComments(updatedComments) {
      this.currTask.comments = updatedComments
      this.saveCurrTask()
    },
    closeModal() {
      this.saveCurrTask()
      const boardId = this.$route.params.boardId
      // console.log('boardId',boardId);
      this.$router.push({ name: 'board', params: { boardId } })
    },
    openEditModal(editType) {
      this.$store.commit({ type: 'toggleEditModal', isOpen: true, editType })
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
    trelloTxtInput,
    trelloDates
  }
}
</script>

<style>
</style>