<template>
    <section class="members-edit">
        <input class="search" type="text" placeholder="Search members" />
        <span class="secondary-section-title">Board members</span>
        <ul>
            <li v-for="member in members" :key="member._id" class="flex align-center selected">
                <user-avatar :user="member" :diameter="32"></user-avatar>
                <div class="member">
                    <span>{{ member.fullname + ' (' + member.username + ')' }}</span>
                </div>
            </li>
        </ul>
        <!-- <pre>{{members}}</pre> -->
    </section>
</template>

<script>
import userAvatar from "../user-avatar.vue"

export default {
    name: 'members-edit',
    computed: {
        members() {
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