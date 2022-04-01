<template>
    <section v-if="currStatus" class="upload-edit">
        <span class="secondary-section-title">Upload file</span>
        <label v-if="currStatus.isWaiting">
            <div class="img-container" ref="imgContainer"></div>
            <input class="search" type="file" v-focus @change="onUpload" />
            <span class="secondary-section-title">Attach a link</span>
            <button class="primary-btn">Attach</button>
        </label>
        <div v-else>
            <div class="img-container" ref="imgContainer"></div>
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
    created() {
        for (status in this.statusOptions) {
            this.statusOptions[status].img = new Image()
            this.statusOptions[status].img.src = '../../../../src/assets/' + this.statusOptions[status].imgName
        }
        console.log('this.statusOptions', this.statusOptions);
        this.currStatus = this.statusOptions.waiting
    },
    mounted() {
        this.$refs.imgContainer.appendChild(this.currStatus.img)
    },
    data() {
        return {
            currStatus: null,
            statusOptions: {
                waiting: {
                    imgName: "Upload-PNG-Image-File.png",
                    txt: "Upload file",
                    img: null,
                    isWaiting: true
                },
                loading: {
                    imgName: "loader.gif",
                    img: null,
                    txt: 'Loading...',
                },
                complete: {
                    imgName: "checkmark-cut.gif",
                    img: null,
                    txt: 'Attachment added successfuly!'
                },
                failed: {
                    imgName: "ezgif.com-gif-maker.gif",
                    img: null,
                    txt: 'OOPS! File upload failed!'
                }
            }
        }
    },
    methods: {
        async onUpload(ev) {
            console.log('ev.target.files[0]', ev.target.files[0]);
            this.currStatus = this.statusOptions.loading;
            this.$refs.imgContainer.appendChild(this.currStatus.img)
            try {
                const attachment = await uploadImg(ev)
                if (!this.taskToEdit.attachments) this.taskToEdit.attachments = [];
                this.taskToEdit.attachments.push(attachment)
                console.log('this.taskToEdit', this.taskToEdit);
                // this.$emit('taskUpdated', this.taskToEdit)
                this.currStatus = this.statusOptions.complete
            } catch (err) {
                this.currStatus = this.statusOptions.failed
            }
            this.$refs.imgContainer.appendChild(this.currStatus.img)
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