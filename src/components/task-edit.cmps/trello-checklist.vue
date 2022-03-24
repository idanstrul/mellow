<template>
    <section class="trello-checklist">
        <span class="title">Checklist</span>
        <button>Delete</button>
        <span class="progress-count"></span>
        <div class="progress-bar"></div>
        <ul class="todos clean-list">
            <li v-for="todo in updatedChecklist.todos" :key="todo.id">
                <input type="checkbox" v-model="todo.isDone" />
                <trello-txt-input :txt="todo.title" @txt-saved="updateTodoTitle($event, todo.id)"></trello-txt-input>
            </li>
        </ul>
        <button>Add an item</button>
    </section>
</template>

<script>
import trelloTxtInput from "./trello-txt-input.vue"

export default {
    name: 'trello-checklist',
    props: {
        checklist: Object
    },
    data() {
        return {
            updatedChecklist: JSON.parse(JSON.stringify(this.checklist))
        }
    },
    methods: {
        updateTodoTitle(updatedTitle, todoId) {
            console.log('updatedTitle',updatedTitle);
            // this.$emit('updated', this.updatedDesc)
            const todo = this.updatedChecklist.todos.find(todo => todo.id === todoId)
            todo.title = updatedTitle
        },
        cancel() {
            this.updatedDesc = this.description
        }
    },
    components: {
        trelloTxtInput
    }

}
</script>

<style>
</style>