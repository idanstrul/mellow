<template>
    <section class="trello-checklist">
        <trello-txt-input class="section-title text-m icon-checklist" :txt="updatedChecklist.title" @txt-saved="updateChecklistTitle"></trello-txt-input>
        <button class="btn">Delete</button>
        <span class="progress-count"></span>
        <div class="progress-bar"></div>
        <ul class="todos clean-list">
            <li v-for="(todo, todoIdx) in updatedChecklist.todos" :key="todo.id">
                <input type="checkbox" v-model="todo.isDone" />
                <trello-txt-input :txt="todo.title" @txt-saved="updateTodoTitle($event, todo.id)" @txt-is-empty="removeTodo(todoIdx)"></trello-txt-input>
            </li>
        </ul>
        <button class="btn">Add an item</button>
        <pre>{{updatedChecklist}}</pre>
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
            const idx = this.updatedChecklist.todos.findIndex(todo => todo.id === todoId)
            this.updatedChecklist.todos[idx].title = updatedTitle
        },
        updateChecklistTitle(updatedTitle){
            this.updatedChecklist.title = updatedTitle
        },
        removeTodo(todoIdx){
            this.updatedChecklist.todos.splice(todoIdx, 1)
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