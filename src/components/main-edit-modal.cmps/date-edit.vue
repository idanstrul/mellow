<template>
    <section class="date-edit">
            <Datepicker v-model="currTaskDates.endDate" :startTime="null" utc inline range :monthChangeOnScroll="false" weekStart="0" monthNameFormat="long"></Datepicker>

        <!-- <el-calendar v-model="currTaskDates.startDate" /> -->
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

  import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'date-edit',
    components: { Datepicker },
    data() {
        return {
            currTaskDates: {
                startDate: null,
                endDate: null,
                endTime: null,
                date: null
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


