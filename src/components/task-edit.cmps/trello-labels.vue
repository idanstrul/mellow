<template>
    <section class="trello-labels">
        <ul>
            <li v-for="label in labels" :key="label.id">
                <div class="label" :style="{ 'background-color': label.color }"></div>
            </li>
            <button class="btn add-label label">+</button>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'trello-labels',
    props: {
        labels: Array
    },
    data() {

    }
}
</script>

<style>
.label {
    display: block;
    border-radius: 3px;
    height: 32px;
    margin: 0 4px 4px 0;
    min-width: 40px;
    padding: 0 12px;
}

.label:hover{
    opacity: 0.7;
    cursor: pointer;
}
</style>