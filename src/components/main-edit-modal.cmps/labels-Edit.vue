<template>
    <section class="labels-edit">
        <input class="search" type="text" placeholder="Search labels..." />
        <span class="secondary-section-title">Labels</span>
        <ul>
            <li v-for="label in labels" :key="label.id">
                <div
                    class="label"
                    :class="{ 'selected': checkIfTaskLabel(label) }"
                    :style="{ 'background-color': label.color }"
                    @click="toggleLabelFromTask(label)"
                >
                    <span>{{ label.title }}</span>
                </div>
                <span class="edit-icon"></span>
            </li>
        </ul>
        <button class="btn-default">Create a new label</button>
        <pre>{{ taskToEdit }}</pre>
        <pre>{{ labels }}</pre>
    </section>
</template>

<script>
export default {
    name: 'labels-edit',
    props: {
        currTask: Object
    },
    methods: {
        checkIfTaskLabel(label) {
            if (!this.taskToEdit.labelIds) return false
            console.log(label);
            return this.taskToEdit.labelIds.some(id => id === label.id)
        },
        toggleLabelFromTask(label) {
            // console.log('label',label);
            // console.log('this.taskToEdit.labelIds', this.taskToEdit.labelIds); this.taskToEdit.labelIds
            if (!this.taskToEdit.labelIds) this.taskToEdit.labelIds = [];
            var labelIds = this.taskToEdit.labelIds
            const idx = labelIds.findIndex(id => id === label.id)
            if (idx === -1) labelIds.push(label.id)
            else labelIds.splice(idx, 1)
            console.log('this.taskToEdit',this.taskToEdit);
            this.$emit('taskUpdated', this.taskToEdit)

        }
    },
    computed: {
        labels() {
            return this.$store.getters.currBoardLabels
        },
        taskToEdit() {
            return JSON.parse(JSON.stringify(this.currTask))
        }
    }
}
</script>

<style>
</style>