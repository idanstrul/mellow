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
        <pre>{{ currTask }}</pre>
    </section>
</template>

<script>
import userAvatar from "../user-avatar.vue"

export default {
    name: 'members-edit',
    props: {
        currTask: Object
    },
    data() {
        return {
            updatedTask: JSON.parse(JSON.stringify(this.currTask))
        }
    },
    methods: {
        checkIfTaskMember(memberId) {
            return this.currTask.members.some(taskMember => {
                return taskMember._id === memberId
            })
        },
        toggleMembership(member) {
            const idx = this.updatedTask.members.findIndex(m => m._id === member._id)
            if (idx === -1) this.updatedTask.members.push(member)
            else this.updatedTask.members.splice(idx, 1)
            // this.$store.dispatch({type: 'updateTask', taskToSave: this.updatedTask, groupId: })
        }

    },
    computed: {
        currBoardMembers() {
            return this.$store.getters.currBoardMembers
        }
    },
    components: {
        userAvatar
    }
}
</script>

<style>
</style>