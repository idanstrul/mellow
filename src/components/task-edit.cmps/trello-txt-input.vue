<template>
    <section class="trello-txt-input" @click="isInEdit = true">
        <span v-if="!isInEdit" class="input-title">{{ txtToShow }}</span>
        <div v-else class="input-edit">
            <textarea cols="30" rows="3" @keydown.enter.prevent="next" v-model="updatedTxt" :placeholder="placeholder" v-focus></textarea>
            <button class="primary-btn" @click.stop="saveTxt">Save</button>
            <button class="cancel-btn" @click.stop="cancel"></button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'trello-txt-input',
    props: {
        txt: String,
        placeholder: {
            type: String,
            default: ''
        },
        denyEmptySave: {
            type: Boolean,
            default: false
        },
        resetOnSave: {
            type: Boolean
        }
    },
    data() {
        return {
            updatedTxt: this.txt,
            isInEdit: false
        }
    },
    methods: {
        saveTxt() {
            if (!this.updatedTxt) {
                console.log('this.denyEmptySave', this.denyEmptySave);
                if (!this.denyEmptySave) this.isInEdit = false
                return this.$emit('txtIsEmpty', '')
            }
            this.$emit('txtSaved', this.updatedTxt)
            if (this.resetOnSave) this.updatedTxt = '';
            this.isInEdit = false
        },
        cancel() {
            this.updatedTxt = this.txt
            this.isInEdit = false
        },
        next(){
            this.saveTxt()
            if (!this.isInEdit) this.$emit('enterClicked')
        }
    },
    computed: {
        txtToShow() {
            if (!this.updatedTxt && this.placeholder) return this.placeholder
            return this.updatedTxt
        }
    }
}
</script>

<style>
</style>