<template>
    <section class="date-edit">
        <el-calendar v-model="currTaskDates.startDate" />
        <!-- <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="Pick a Date"
            format="YYYY/MM/DD hh:mm:ss"
            value-format="x"
        /> -->
        <span class="secondary-section-title">Start date</span>

        <span class="secondary-section-title">Due date</span>
        <el-time-select v-model="currTaskDates.endTime" step="00:15" placeholder="Select time" />
        <select>
            <option value>(none)</option>
            <optgroup v-for="task in checklists" :key="task.taskId" :label="task.taskTitle">
                <option
                    v-for="checklist in task.checklists"
                    :key="checklist.id"
                    :value="checklist.id"
                >{{ checklist.title }}</option>
            </optgroup>
        </select>
        <button class="primary-btn">Add</button>
        <pre>{{ currTaskDates }}</pre>
    </section>
</template>

<script>
export default {
    name: 'date-edit',
    data() {
        return {
            currTaskDates: {
                startDate: null,
                endDate: null,
                endTime: null
            }
        }
    },
    computed: {
        checklists() {
            return this.$store.getters.currBoardChecklists
        }
    }
}
</script>

<style>
</style>


