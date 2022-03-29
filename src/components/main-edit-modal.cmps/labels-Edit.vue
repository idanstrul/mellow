<template>
    <section class="labels-edit">
        <input class="search" type="text" placeholder="Search labels..." />
        <span class="secondary-section-title">Labels</span>
        <ul>
            <li v-for="label in labels" :key="label.id">
                <div class="label selected" :style="{ 'background-color': label.color }">
                    <span>{{ label.title }}</span>
                </div>
                <span class="edit-icon"></span>
            </li>
        </ul>
        <button class="btn-default">Create a new label</button>
    </section>
</template>

<script>
export default {
    name: 'labels-edit',
    computed: {
        labels() {
            return this.$store.getters.currBoardLabels
        }
    }
}
</script>

<style>
</style>