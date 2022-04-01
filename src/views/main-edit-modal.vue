<template>
    <section
        v-clickoutside="closeModal"
        class="main-edit-modal"
        :style="{ 'top': posCorrected.y + 'px', 'left': posCorrected.x + 'px' }"
        ref="elModal"
    >
        <!-- v-clickoutside="closeModal" -->
        <header class="modal-header">
            <span class="modal-header-title">{{ modalTitle }}</span>
            <button class="exit-btn" @click="closeModal"></button>
        </header>
        <main class="edit-modal-main">
            <slot></slot>
        </main>
        <pre>{{ position }}</pre>
    </section>
</template>

<script>
export default {
    name: 'main-edit-modal',
    props: {
        modalTitle: String,
        pos: Object
    },
    mounted() {
        // console.log('this.$refs.elModal.getBoundingClientRect()', this.$refs.elModal.getBoundingClientRect());
        // console.log('this.$refs.elModal', this.$refs.elModal);
        console.log('Main edit modal is mounted!');
        const pos = JSON.parse(JSON.stringify(this.pos))
        const elArea = this.$refs.elModal.getBoundingClientRect()
        if (elArea.top < 0) pos.y = 20
        if (elArea.left < 0) pos.x = 20
        if (elArea.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
            pos.y = (window.innerHeight || document.documentElement.clientHeight) - elArea.height - 20
        }
        if (elArea.right > (window.innerWidth || document.documentElement.clientWidth)) {
            // console.log('is out from right!');
            pos.x = (window.innerWidth || document.documentElement.clientWidth) - elArea.width - 20
        }

        this.posCorrected = pos
        // console.log('this.posCorrected',this.posCorrected);


    },
    data() {
        return {
            posCorrected: JSON.parse(JSON.stringify(this.pos))
        }
    },
    methods: {
        closeModal() {
            this.$emit('editModalClosed')
            // this.$store.commit({type: 'toggleEditModal', isOpen: false, editType: ''})
        }
    },
    computed: {
        position() {
            return this.$refs.elModal
        }
    },
    unmounted(){
        console.log('main edit modal is unmounted');
    }

}
</script>

<style>
</style>