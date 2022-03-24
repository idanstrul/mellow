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
.user-avatar {
    object-fit: cover;
    height: 28px;
    width: 28px;
    border-radius: 50px;
    /* margin: 5px 2px 0px 2px; */
    margin: 3px 0px 0px 4px;
}

.user-avatar div{
    width: 100%;
    height: 100%;
    color: white;
    line-height: 28px;
}

.user-avatar:hover{
    opacity: 0.7;
    cursor: pointer;
}

img {
    width: 100%;
}

.user-avatar * {
    border-radius: inherit;
}
</style>