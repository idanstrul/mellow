<template>
 <section>
    <p>{{ group.title }}</p>
 </section>
</template>

<script>


export default {
  props: {
    group:{
        type: Object,
        required: true
    }
  },
  components: {
  
},
  methods: {
    
  },
}
</script>
