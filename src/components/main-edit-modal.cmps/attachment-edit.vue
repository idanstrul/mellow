<template>
    <section class="upload-edit">
        <span class="secondary-section-title">Upload file</span>
        <label v-if="currStatus.isWaiting">
            <img :src="'../../../../src/assets/' + currStatus.imgName" :alt="currStatus.txt" />
            <input class="search" type="file" v-focus @change="onUpload" />
            <span class="secondary-section-title">Attach a link</span>
            <button class="primary-btn">Attach</button>
        </label>
        <div v-else>
            <img :src="'../../../../src/assets/' + currStatus.imgName" />
            <span>{{ currStatus.txt }}</span>
        </div>
        <!-- <pre>{{todosToCopy}}</pre> -->
        <!-- <pre>{{ taskToEdit }}</pre> -->
        <!-- <pre>{{ checklists }}</pre> -->
    </section>
</template>

<script>
import { utilService } from "../../services/util.service"
import { uploadImg } from "../../services/imgUpload.service";

// C:\dev\cajan22\sprint 4\frontend\src\assets\Upload-PNG-Image-File.png
export default {
    name: 'upload-edit',
    props: {
        currTask: Object
    },
    created(){
        this.currStatus = this.statusOptions.waiting
    },
    data() {
        return {
            currStatus: null,
            statusOptions: {
                waiting: {
                    imgName: "Upload-PNG-Image-File.png",
                    txt: "Upload file",
                    isWaiting: true
                },
                loading: {
                    imgName: "loader.gif",
                    txt: 'Loading...',
                    isLoading: true
                },
                complete: {
                    imgName: "checkmark-cut.gif",
                    txt: 'Attachment added successfuly!'
                },
                failed: {
                    imgName: "ezgif.com-gif-maker.gif",
                    txt: 'OOPS! File upload failed!'
                }
            }
        }
    },
    methods: {
        async onUpload(ev) {
            console.log('ev.target.files[0]', ev.target.files[0]);
            this.currStatus = this.statusOptions.loading;
            try {
                const attachment = await uploadImg(ev)
                if (!this.taskToEdit.attachments) this.taskToEdit.attachments = [];
                this.taskToEdit.attachments.push(attachment)
                console.log('this.taskToEdit', this.taskToEdit);
                this.$emit('taskUpdated', this.taskToEdit)
                this.currStatus = this.statusOptions.complete
            } catch (err) {
                this.currStatus = this.statusOptions.failed
            }
            setTimeout(this.closeModal, 2000)
        },
        closeModal() {
            this.$emit('editModalClosed')
        }
        // createChecklist() {
        //     this.newChecklist.id = utilService.makeId()
        //     this.newChecklist.todos = JSON.parse(JSON.stringify(this.todosToCopy.flat()))
        //         .map(todo => {
        //             console.log('todo', todo);
        //             todo.id = utilService.makeId()
        //             return todo
        //         })
        //     // console.log('newTodos', newTodos);
        //     // console.log('this.todosToCopy',this.todosToCopy);
        //     if (!this.taskToEdit.checklists) this.taskToEdit.checklists = [];
        //     this.taskToEdit.checklists.push(JSON.parse(JSON.stringify(this.newChecklist)))
        //     // console.log('this.taskToEdit', this.taskToEdit);
        //     this.$emit('taskUpdated', this.taskToEdit)
        //     this.newChecklist = {
        //         id: null,
        //         title: 'Checklist',
        //         todos: []
        //     }
        //     this.$emit('modalClosed')

        // }
    },
    computed: {
        // checklists() {
        //     return this.$store.getters.currBoardChecklists
        // },
        taskToEdit() {
            return JSON.parse(JSON.stringify(this.currTask))
        }
    }
}
</script>

<style>
</style>