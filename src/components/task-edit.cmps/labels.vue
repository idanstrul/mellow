<template>
  <section class="labels">
      <ul>
          <li v-for="label in modelValue" :key="label.id">
              <div class="label" :style="{color: label.color}"></div>
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    name: 'labels',
    props: {
        modelValue: Array
    },
    data(){

    }
}
</script>

<style>

</style>