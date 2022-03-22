<template>
  <section class="task-details modal-screen">
      <div class="modal-container">
        <div class="modal-header">I'm a task details modal</div>
        <div class="modal-main"></div>
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
export default {
  name: 'task-details',
  props: {
    task: Object
  }


}
</script>

<style>

</style>