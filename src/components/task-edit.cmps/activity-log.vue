<template>
    <section class="activity-log">
        <span class="section-title text-m icon-activity">Activity</span>
        <ul class="clean-list">
            <li>
                <user-avatar :user="newComment.byMember"></user-avatar>
                <trello-txt-input
                    :txt="newComment.txt"
                    placeholder="Write a comment..."
                    deny-empty-save
                    reset-on-save
                    @txt-saved="addComment"
                ></trello-txt-input>
            </li>
            <li v-for="comment in updatedComments" :key="comment.id">
                <!-- <div class="flex-container"> -->
                <user-avatar :user="comment.byMember"></user-avatar>
                <span class="user-fullname">{{ comment.byMember.fullname }}</span>
                <span class="comment-time">{{ formatCreatedAt(comment.createdAt) }}</span>
                <!-- </div> -->
                <p>{{ comment.txt }}</p>
            </li>
            <!-- <pre>{{updatedComments}}</pre> -->
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
            updatedComments: JSON.parse(JSON.stringify(this.comments)),
            newComment: {
                id: '',
                txt: '',
                createdAt: null,
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
        },
        addComment(commentTxt) {
            this.newComment.id = this.makeId()
            this.newComment.txt = commentTxt,
            this.newComment.createdAt= Date.now()
            this.updatedComments.unshift(JSON.parse(JSON.stringify(this.newComment)))
        },
        makeId(length = 8) {
            var txt = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (var i = 0; i < length; i++) {
                txt += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return txt;
        },
    },
    components: {
        userAvatar,
        trelloTxtInput
    }
}
</script>

<style>
</style>