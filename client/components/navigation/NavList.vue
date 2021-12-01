<template>
    <ul class="nav-list" :style="{ display: display, 'font-size': fontSize }">
        <NavItem :url="`/posts`" name="Blog" :margin="margin" />
        <NavItem :url="`/about`" name="About" :margin="margin" />
        <NavItem :url="`/admin`" name="Admin" :margin="margin" />
    </ul>
</template>

<script setup>
import NavItem from './NavItem.vue';
const props = defineProps(['display', 'margin', 'fontSize']);
</script>

<style scoped>
.nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    /* display: flex; */
}
/* .nav-item {
    margin: 0 10px;
} */
.nav-item a {
    text-decoration: none;
    color: black;
}
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
    color: green;
}
</style>