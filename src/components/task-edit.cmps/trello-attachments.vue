<template>
    <section class="trello-attachments">
        <div class="section-title text-m icon-attachment">Attachments</div>
        <ul class="attachments clean-list">
            <li
                class="flex"
                v-for="(attachment, attachmentIdx) in attachments"
                :key="attachment.asset_id"
            >
                <img
                    class="img-preview"
                    :src="attachment.secure_url"
                    :alt="attachment.original_filename"
                />
                <p class="file-details">
                    <span
                        class="attachment-name"
                    >{{ attachment.original_filename + '.' + attachment.format }}</span>
                    <span class="attachment-addedAt">Added at {{ attachment.created_at }}</span>
                    <span class="attachment-delete">
                        <a href="#" @click.prevent="removeAttachment(attachmentIdx)">Delete</a>
                    </span>
                    <span class="attachment-edit-name">
                        <a href="#" @click.prevent="editName(attachmentIdx)">Edit</a>
                    </span>
                    <span class="attachment-make-cover">
                        <a href="#" @click.prevent="makeCover(attachmentIdx)">
                            Make-cover
                        </a>
                    </span>
                </p>
            </li>
        </ul>
        <button class="btn" @click="openEditModal">Add an attachment</button>
        <!-- <pre>{{ attachments }}</pre> -->
    </section>
</template>

<script>
export default {
    name: 'trello-attachments',
    props: {
        attachments: Array
    },
    methods: {
        removeAttachment(attachmentIdx){
            // console.log('removeing');
            this.updatedAttachments.splice(attachmentIdx, 1)
            this.$emit('updated', this.updatedAttachments)
        },

        // openEditModal(event) {
        //     this.$emit('editModalOpened', event)
        // },
        // saveChecklist() {
        //     const checklistToSave = JSON.parse(JSON.stringify(this.updatedChecklist))
        //     this.$emit('updated', checklistToSave)
        // },
        // toggleTodoStatus(todoIdx) {
        //     const todo = this.updatedChecklist.todos[todoIdx]
        //     todo.isDone = !todo.isDone
        //     this.saveChecklist()
        // },
        // updateChecklistTitle(updatedTitle) {
        //     this.updatedChecklist.title = updatedTitle
        //     this.saveChecklist()
        // },
        // updateTodoTitle(updatedTitle, todoId) {
        //     // console.log('updatedTitle', updatedTitle);
        //     // this.$emit('updated', this.updatedDesc)
        //     const idx = this.updatedChecklist.todos.findIndex(todo => todo.id === todoId)
        //     this.updatedChecklist.todos[idx].title = updatedTitle
        //     this.saveChecklist()
        // },
        // removeTodo(todoIdx) {
        //     this.updatedChecklist.todos.splice(todoIdx, 1)
        //     this.saveChecklist()

        // },
        // addTodo(title) {
        //     this.updatedChecklist.todos.push({
        //         id: utilService.makeId(),
        //         title,
        //         isDone: false
        //     })
        //     this.saveChecklist()
        // },
        // next() {
        //     // console.log('event',event);
        //     // console.log(this.$refs.input.$el);
        //     this.$refs.input.$el.click()
        //     // event.target.click()
        // }

    },
    computed: {
        // completePercentage() {
        //     const todos = this.updatedChecklist.todos
        //     const total = todos.length;
        //     if (total === 0) return 0
        //     const completed = todos.filter(todo => todo.isDone).length
        //     return Math.floor((completed / total) * 100)
        // },
        // passSuccess() {
        //     if (this.completePercentage === 100) return 'success'
        //     return ''
        // }
        updatedAttachments(){
            return JSON.parse(JSON.stringify(this.attachments))
        }
    }

}
</script>

<style>
</style>