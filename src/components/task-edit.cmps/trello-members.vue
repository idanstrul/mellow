<template>
    <section class="trello-members">
        <span class="secondary-section-title">Members</span>
        <ul class="clean-list">
            <li v-for="member in members" :key="member._id">
                <user-avatar :user="member" :diameter="32"></user-avatar>
            </li>
            <li>
                <button class="btn-round"></button>
            </li>
        </ul>
    </section>
</template>

<script>
import userAvatar from "../user-avatar.vue";

export default {
    name: 'trello-members',
    props: {
        members: Array
    },
    methods: {
    },
    components: {
        userAvatar
    }
}
</script>

<style>
</style>