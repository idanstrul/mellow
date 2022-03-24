<template>
<section class="task-preview">
<p>{{ task.title }}</p>
<section v-if="task.members" class="task-members">
  <user-avatar v-for="m in task.members" :key="m._id" :user="m"></user-avatar>
</section>
</section>
</template>

<script>

import userAvatar from "./user-avatar.vue"

export default {
  name: 'task-preview',
  props: {
    task: Object,
  },
  components: {
    userAvatar
  },
  methods: {
    goToDetail() {
      this.$router.push(`/task/${this.task._id}`)
    },
  },
}
</script>
