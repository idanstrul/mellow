<template>
    <section class="members-edit">
        <input class="search" type="text" placeholder="Search members" />
        <span class="secondary-section-title">Board members</span>
        <ul>
            <li
                v-for="member in currBoardMembers"
                :key="member._id"
                class="flex align-center"
                :class="{ selected: checkIfTaskMember(member._id) }"
                @click="toggleMembership(member)"
            >
                <user-avatar :user="member" :diameter="32"></user-avatar>
                <div class="member">
                    <span>{{ member.fullname + ' (' + member.username + ')' }}</span>
                </div>
            </li>
        </ul>
        <!-- <pre>{{ currTask }}</pre> -->
    </section>
</template>

<script>
import userAvatar from "../user-avatar.vue"

export default {
    name: 'members-edit',
    props: {
        currTask: Object,
    },
    methods: {
        checkIfTaskMember(memberId) {
            if (!this.taskToEdit.members) return false
            return this.taskToEdit.members.some(taskMember => {
                return taskMember._id === memberId
            })
        },
        async toggleMembership(member) {
            // console.log('toggleMembership()')
            if (!this.taskToEdit.members) this.taskToEdit.members = []
            var members = this.taskToEdit.members
            // console.log('member._id', member._id)
            // console.log('members',members)
            const idx = members.findIndex(m => m._id === member._id)
            // console.log('idx', idx)
            if (idx === -1) members.push(member)
            else members.splice(idx, 1)
            // await this.$store.dispatch({type: 'saveTask', taskToSave: JSON.parse(JSON.stringify(this.taskToEdit)), groupId: this.parentGroupId})
           // console.log('this.$store.getters.currBoard.groups.find(g => g.id === this.parentGroupId).tasks[]', this.$store.getters.currBoard.groups.find(g => g.id === this.parentGroupId).tasks.find(t => t.id === this.taskToEdit.id))
            // console.log('this.taskToEdit.members', this.taskToEdit.members)
            this.$emit('taskUpdated', this.taskToEdit)

        }

    },
    computed: {
        currBoardMembers() {
            return this.$store.getters.currBoardMembers
        },
        taskToEdit() {
            return JSON.parse(JSON.stringify(this.currTask))
        }
    },
    components: {
        userAvatar
    }
}
</script>

<style>
</style>