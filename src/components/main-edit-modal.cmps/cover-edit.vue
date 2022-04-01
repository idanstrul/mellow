<template>
    <section class="cover-edit">
       <h4>Size</h4>
       <div class="flex center align-center">
        <label>
        <input @click="setCoverSize('small')" :checked="currTask.style && currTask.style.size=='small'" type="radio" name="cover-opt">  
        <div class="cover-opt small"> 
            <div  class="cover-opt-header" :style="getBg" ></div>
                <div class="cover-opt-lines" :class="getLine">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="circle"></div>
                </div> 
        </div>
        </label>
        <label>
        <input @click="setCoverSize('big')" :checked="currTask.style && currTask.style.size=='big'" type="radio" name="cover-opt" value="true">
        <div class="cover-opt big">
            <div :style="getBg" class="big-container">
            <div class="cover-opt-lines" :class="getLine">
        <div class="line"></div>
        <div class="line"></div>
        </div>
        </div>
        </div>
        
        </label>
        </div>
        <button @click="removeCover" v-if="currTask.style" class="btn-remove-cover">Remove cover</button>
        <h4>Colors</h4>
        <div class="btn-cover-container flex center wrap">
            <label @click="setCoverClr('#7BC86C')">
            <input :checked="currTask.style && currTask.style.bg=='#7BC86C'" type="radio" name="btn-clr">
            <div class="btn-clr green"></div>
            </label>
            <label  @click="setCoverClr('#f5dd29')">
            <input :checked="currTask.style && currTask.style.bg=='#f5dd29'" type="radio" name="btn-clr">
            <div class="btn-clr yellow"></div>
            </label>
            <label @click="setCoverClr('#FFAF3F')">
            <input :checked="currTask.style && currTask.style.bg=='#FFAF3F'" type="radio" name="btn-clr">
            <div class="btn-clr orange"></div>
            </label>
            <label  @click="setCoverClr('#EF7564')">
            <input :checked="currTask.style && currTask.style.bg=='#EF7564'" type="radio" name="btn-clr">
            <div class="btn-clr red"></div>
            </label>
            <label  @click="setCoverClr('#CD8DE5')">
            <input :checked="currTask.style && currTask.style.bg=='#CD8DE5'" type="radio" name="btn-clr">
            <div class="btn-clr purple"></div>
            </label>
            <label  @click="setCoverClr('#5BA4CF')">
            <input :checked="currTask.style && currTask.style.bg=='#5BA4CF'" type="radio" name="btn-clr">
            <div class="btn-clr blue"></div>
            </label>
            <label  @click="setCoverClr('#29CCE5')">
            <input :checked="currTask.style && currTask.style.bg=='#29CCE5'" type="radio" name="btn-clr">
            <div class="btn-clr lightblue"></div>
            </label>
            <label  @click="setCoverClr('#6DECA9')">
            <input :checked="currTask.style && currTask.style.bg=='#6DECA9'" type="radio" name="btn-clr">
            <div class="btn-clr turquoise"></div>
            </label>
            <label  @click="setCoverClr('#FF8ED4')">
            <input :checked="currTask.style && currTask.style.bg=='#FF8ED4'" type="radio" name="btn-clr">
            <div class="btn-clr pink"></div>
            </label>
            <label @click="setCoverClr('#172B4D')">
            <input :checked="currTask.style && currTask.style.bg=='#172B4D'" type="radio" name="btn-clr">
            <div class="btn-clr navy"></div>
            </label>
        </div>
       
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
// import { json } from "stream/consumers";


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
        setCoverClr(clr){
           console.log(this.taskToEdit);
            if(!this.taskToEdit.style) this.taskToEdit.style = {}
            this.taskToEdit.style.bg = clr 
            if(!this.taskToEdit.style.size) this.taskToEdit.style.size = 'small'
            this.$emit('taskUpdated', this.taskToEdit)
            // console.log(this.currTask);
       },
       setCoverSize(size){
           console.log(this.taskToEdit);
            if(!this.taskToEdit.style) this.taskToEdit.style = {}
            this.taskToEdit.style.size = size 
            if(!this.taskToEdit.style.bg) this.taskToEdit.style.bg = '#7BC86C'
            this.$emit('taskUpdated', this.taskToEdit)
       },
       removeCover(){
           delete this.taskToEdit.style
           console.log(this.taskToEdit);
            this.$emit('taskUpdated', this.taskToEdit)
       },

    },
    computed: {
        getBg(){
            // if
            var bg = JSON.parse(JSON.stringify(this.currTask))
            if(!bg.style){
            bg.style = {}
            bg.style.bg = ''
            }
            // console.log(this.taskToEdit.style.bg);
            if(bg.style.bg)
            return `background-color: ${bg.style.bg}; opacity:1`
            return `background-color: ${bg.style.bg}`
            //  return `background-color: ${this.taskToEdit.style.bg}` 
            // return {'background-color': this.taskToEdit.style.bg}
            // return `background-color: ${this.taskToEdit.style.bg}; position: absolute`
        },
        getLine(){
            // console.log(this.currTask);
            if(!this.currTask.style) return
            else return 'colorized'
        },
        
        taskToEdit() {
            const task = JSON.parse(JSON.stringify(this.currTask))
            // if(!task.style) task.style = {}
            // task.style.bg = ''
            return task
        },
    },
    components: {
    }
}
</script>

<style>
</style>