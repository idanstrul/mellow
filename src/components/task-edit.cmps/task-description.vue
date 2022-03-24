<template>
  <section class="task-description">
    <span class="title">Description</span>
    <textarea
      cols="30"
      rows="10"
      v-model="updatedDesc"
      placeholder="Add a more detailed description…"
    ></textarea>
    <!-- @blur="updateDesc" -->
    <button @click="updateDesc">Save</button>
    <button @click="cancel">X</button>
  </section>
</template>

<script>
export default {
  name: 'task-description',
  props: {
    description: String
  },
  data() {
    return {
      updatedDesc: this.description
    }
  },
  methods: {
    updateDesc() {
      this.$emit('updated', this.updatedDesc)
    },
    cancel() {
      this.updatedDesc = this.description
    }
  }

}
</script>

<style>
</style>