<template>
  <section class="trello-members">
      <ul>
          <li v-for="member in members" :key="member._id">
              <div class="member-avatar">
                  <img v-if="member.imgUrl" :src="member.imgUrl">
                  <span>{{getNameAbbreviation(member.fullname)}}</span>
              </div>
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    name: 'trello-members',
    props: {
        members: Array
    },
    methods: {
        getNameAbbreviation(fullName){
            const names = fullName.split(' ')
            console.log('names',names);
            const initiates = names.map(n => n.charAt(0).toUpperCase())
            return initiates.join('')
        }
    },
    computed: {
        
    }
}
</script>

<style>

</style>