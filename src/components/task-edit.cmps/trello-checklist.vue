<template>
    <section class="trello-checklist">
        <trello-txt-input
            class="section-title text-m icon-checklist"
            :txt="updatedChecklist.title"
            @txt-saved="updateChecklistTitle"
            deny-empty-save
        ></trello-txt-input>
        <button class="btn float-right">Delete</button>
        <!-- <span class="progress-count"></span> -->
        <el-progress :percentage="completePercentage" :status="passSuccess" />
        <!-- <div class="progress-bar"></div> -->
        <ul class="todos clean-list">
            <li v-for="(todo, todoIdx) in updatedChecklist.todos" :key="todo.id">
                <input type="checkbox" v-model="todo.isDone" />
                <trello-txt-input
                    :txt="todo.title"
                    @txt-saved="updateTodoTitle($event, todo.id)"
                    @txt-is-empty="removeTodo(todoIdx)"
                ></trello-txt-input>
            </li>
        </ul>
        <trello-txt-input
            class="make-btn"
            placeholder="Add an item"
            deny-empty-save
            reset-on-save
            @txt-saved="addTodo"
            @enter-clicked="next()"
            ref="input"
        ></trello-txt-input>
        <!-- <pre>{{ updatedChecklist }}</pre> -->
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
        updateChecklistTitle(updatedTitle) {
            this.updatedChecklist.title = updatedTitle
        },
        updateTodoTitle(updatedTitle, todoId) {
            console.log('updatedTitle', updatedTitle);
            // this.$emit('updated', this.updatedDesc)
            const idx = this.updatedChecklist.todos.findIndex(todo => todo.id === todoId)
            this.updatedChecklist.todos[idx].title = updatedTitle
        },
        removeTodo(todoIdx) {
            this.updatedChecklist.todos.splice(todoIdx, 1)
        },
        addTodo(title) {
            this.updatedChecklist.todos.push({
                id: this.makeId(),
                title,
                isDone: false
            })
        },
        cancel() {
            this.updatedDesc = this.description
        },
        makeId(length = 8) {
            var txt = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (var i = 0; i < length; i++) {
                txt += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return txt;
        },
        next(){
            // console.log('event',event);
            // console.log(this.$refs.input.$el);
            this.$refs.input.$el.click()
            // event.target.click()
        }

    },
    computed: {
        completePercentage() {
            const todos = this.updatedChecklist.todos
            const total = todos.length;
            if (total === 0) return 0
            const completed = todos.filter(todo => todo.isDone).length
            return Math.floor((completed / total) * 100)
        },
        passSuccess() {
            if (this.completePercentage === 100) return 'success'
            return ''
        }
    },
    components: {
        trelloTxtInput
    }

}
</script>

<style>
</style>