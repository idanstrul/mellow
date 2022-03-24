<template>
    <div class="user-avatar">
        <img v-if="user.imgUrl" :src="user.imgUrl" />
        <div class="flex center" v-else :style="userColor">{{ getNameAbbreviation(user.fullname) }}</div>
    </div>
</template>

<script>
export default {
    name: 'user-avatar',
    props: {
        user: Object
    },
    methods: {
        getNameAbbreviation(fullName) {
            const names = fullName.split(' ')
            console.log('names', names);
            console.log(this.user);
            const initiates = names.map(n => n.charAt(0).toUpperCase())
            return initiates.join('')
        }
    },
    computed: {
        userColor(){
            console.log(this.user.color);
            return `background-color: ${this.user.color}`
        }
    }
}
</script>

<style>

</style>