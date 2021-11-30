<template>
    <ul class="nav-list" :style="{ display: display, 'font-size': fontSize }">
        <li :style="{ margin: margin }">
            <nuxt-link to="/posts">Blog</nuxt-link>
        </li>
        <li :style="{ margin: margin }">
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li :style="{ margin: margin }">
            <nuxt-link to="/admin">Admin</nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['display', 'margin', 'fontSize']
}
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