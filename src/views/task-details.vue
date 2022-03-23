<template>
  <section class="task-details modal-screen">
      <div class="modal-container">
        <div v-if="false" class="cover"></div>
        <div class="modal-header">I'm a task details modal</div>
        <div class="modal-main">
          <div v-if="false" class="notations"></div>
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
import labels from "../components/task-edit.cmps/labels.vue"

export default {
  name: 'task-details',
  props: {
    task: Object
  },
  components: {
    labels
  }
}
</script>

<style>

</style>