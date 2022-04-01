<template>
    <section class="cover-edit">
       <h4>Size</h4>
       <div class="flex center align-center">
        <label>
        <input v-model="coverSize" type="radio" name="cover-opt" value="small">
        <div class="cover-opt small">
            <div class="cover-opt-header">
            </div>
                <div class="cover-opt-lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="circle"></div>
                </div>
        </div>
        </label>
        <label>
        <input v-model="coverSize" type="radio" name="cover-opt" value="big">
        <div class="cover-opt big">
            <div class="big-container">
            <div class="cover-opt-lines">
        <div class="line"></div>
        <div class="line"></div>
        </div>
        </div>
        </div>
        
        </label>
        </div>
        <h4>Colors</h4>
            <!-- <div class="cover-opt">
             

            </div>
            <div class="cover-opt">
                <div>

                </div>
            </div>
       </div> -->
    </section>
</template>

<script>

export default {
    name: 'cover-edit',
    props: {
        currTask: Object,
    },
    data(){
        return {
            coverSize:''
        } 
    },
    methods: {
       

    },
    computed: {
        
        taskToEdit() {
            return JSON.parse(JSON.stringify(this.currTask))
        }
    },
    components: {
    }
}
</script>

<style>
</style>