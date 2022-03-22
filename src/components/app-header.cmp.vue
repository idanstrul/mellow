<template>
    <section class="app-header">
        <h1>I'm a header</h1>
        <nav>
            <router-link to="/">Home1</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'app-header'

}
</script>

<style>
</style>