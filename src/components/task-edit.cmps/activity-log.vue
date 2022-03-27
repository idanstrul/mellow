<template>
    <section class="activity-log">
        <span class="section-title text-m icon-activity">Activity</span>
        <ul class="clean-list">
            <li>
                <user-avatar :user="newComment.byMember"></user-avatar>
                <trello-txt-input :txt="newComment.txt" placeholder="Write a comment..." deny-empty-save reset-on-save></trello-txt-input>
            </li>
            <li v-for="comment in comments" :key="comment.id">
                <!-- <div class="flex-container"> -->
                    <user-avatar :user="comment.byMember"></user-avatar>
                    <span class="user-fullname">{{ comment.byMember.fullname }}</span>
                    <span class="comment-time">{{ formatCreatedAt(comment.createdAt) }}</span>
                <!-- </div> -->
                <p>{{ comment.txt }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
import userAvatar from "../user-avatar.vue"
import trelloTxtInput from "./trello-txt-input.vue"

export default {
    name: 'activity-log',
    props: {
        comments: Array
    },
    data() {
        return {
            newComment: {
                txt: '',
                byMember: {
                    "_id": "u101",
                    "fullname": "Tal Tarablus",
                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                } //should be the logged in user
            }
        }
    },
    methods: {
        formatCreatedAt(timeStamp) {
            const options = { month: 'long', day: '2-digit', hour: 'numeric', minute: 'numeric' }
            return new Date(timeStamp).toLocaleString(undefined, options)
        }
    },
    components: {
        userAvatar,
        trelloTxtInput
    }
}
</script>

<style>
</style>