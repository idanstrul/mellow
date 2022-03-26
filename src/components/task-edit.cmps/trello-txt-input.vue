<template>
    <section class="trello-txt-input" @click="isInEdit = true">
        <span v-if="!isInEdit" class="input-title">{{ txtToShow }}</span>
        <div v-else class="input-edit">
            <textarea cols="30" rows="3" v-model="updatedTxt" :placeholder="placeholder" autofocus></textarea>
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
                if (this.placeholder) this.isInEdit = false
                return this.$emit('txtIsEmpty', '')
            }
            this.$emit('txtSaved', this.updatedTxt)
            this.isInEdit = false
        },
        cancel() {
            this.updatedTxt = this.txt
            this.isInEdit = false
        },
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