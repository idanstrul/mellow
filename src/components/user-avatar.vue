<template>
    <div class="user-avatar">
        <img v-if="user.imgUrl" :src="user.imgUrl" />
        <span v-else>{{ getNameAbbreviation(user.fullname) }}</span>
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
            const initiates = names.map(n => n.charAt(0).toUpperCase())
            return initiates.join('')
        }
    }
}
</script>

<style>
.user-avatar {
    object-fit: cover;
    height: 32px;
    width: 32px;
    border-radius: 50px;
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