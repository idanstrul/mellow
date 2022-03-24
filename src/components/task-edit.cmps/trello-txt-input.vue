<template>
    <section class="trello-txt-inpput" @click="isInEdit = true">
        <span v-if="!isInEdit" class="todo-title">{{ updatedTxt }}</span>
        <div v-else class="todo-edit">
            <textarea cols="30" rows="3" v-model="updatedTxt"></textarea>
            <button @click="saveTxt">Save</button>
            <button @click="cancel">X</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'trello-txt-input',
    props: {
        txt: String
    },
    data() {
        return {
            updatedTxt: this.txt,
            isInEdit: false
        }
    }, 
    methods: {
        saveTxt() {
            this.$emit('txtSaved', this.updatedTxt)
            this.isInEdit = false
        },
        cancel() {
            this.updatedTxt = this.txt
            this.isInEdit = false
        }
    }
}
</script>

<style>
</style>