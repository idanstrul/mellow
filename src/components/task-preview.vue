<template>
<section class="task-preview">
<p>{{ task.title }}</p>
</section>
</template>

<script>

export default {
  name: 'task-preview',
  props: {
    task: Object,
  },
  components: {
    // customCard,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/task/${this.task._id}`)
    },
  },
}
</script>
