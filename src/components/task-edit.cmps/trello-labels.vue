<template>
    <section class="trello-labels">
        <span class="title">Labels</span>
        <ul class="clean-list">
            <li v-for="label in labels" :key="label.id">
                <div class="label" :style="{ 'background-color': label.color }"></div>
            </li>
            <button class="btn add-label label">+</button>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'trello-labels',
    props: {
        labels: Array
    },
}
</script>

<style>
</style>