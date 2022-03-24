<template>
    <section class="trello-members">
        <span class="title">Members</span>
        <ul class="clean-list"> 
            <li v-for="member in members" :key="member._id">
                <user-avatar :user="member"></user-avatar>
            </li>
            <button class="user-avatar">+</button>
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