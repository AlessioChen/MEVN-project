<template>
    <li :style="{ margin: margin }">
        <nuxt-link :to="`${url}`">{{ name }}</nuxt-link>
    </li>
</template>

<script setup>
const props = defineProps(['url', 'name', 'margin']);
</script>