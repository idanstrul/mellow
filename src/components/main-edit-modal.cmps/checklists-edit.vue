<template>
    <section class="checklists-edit">
        <span class="secondary-section-title">Title</span>
        <input class="search" type="text" value="Checklist" v-focus/>
        <span class="secondary-section-title">Copy items from...</span>
        <select>
            <option value>(none)</option>
            <optgroup v-for="task in checklists" :key="task.taskId" :label="task.taskTitle">
                <option v-for="checklist in task.checklists" :key="checklist.id" :value="checklist.id">{{checklist.title}}</option>
            </optgroup>
        </select>
        <button class="primary-btn">Add</button>
        <!-- <pre>{{checklists}}</pre> -->
    </section>
</template>

<script>
export default {
    name: 'checklists-edit',
    computed: {
        checklists() {
            return this.$store.getters.currBoardChecklists
        }
    }
}
</script>

<style>
</style>