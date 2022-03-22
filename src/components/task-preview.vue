<template>
<section class="task-preview">
<p>{{ task.title }}</p>
</section>
</template>

<script>
// import customCard from './custom-card.vue'

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
