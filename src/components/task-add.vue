<template>
  <section class="task-add">
      <form action="submit" @submit.prevent="saveTask">
      <textarea 
            style="resize: none; width: 256px; height: 66px" 
            placeholder="Enter a title for this card..."
            v-model="task.title"
            />
      <div>
      <button>Add card</button>
      <span>X</span>
      </div>
      </form>
  </section>
</template>

<script>
export default {
    name: 'task-add',
    props: {
        task: Object,
    },
  methods: {
      saveTask(){
          this.$emit('saveTask', this.task)
      }
  }
}
</script>

<style>

</style>