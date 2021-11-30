<template>
    <div>
        <TheHeader @sidenavToggle="sidenav = !sidenav"></TheHeader>
        <TheSideNav :show="sidenav" @close="sidenav = false"></TheSideNav>
        <div class="w-full m-0 p-0 bg-cover bg-bottom header-site">
            <div class="container max-w-4l mx-auto pt-16 md:pt-32 text-center break-normal"></div>
        </div>

        <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-24">
            <slot />
        </div>
    </div>
</template>

<script setup>
import TheHeader from "~~/components/navigation/TheHeader.vue";
import TheSideNav from "~~/components/navigation/TheSideNav.vue";

import { ref } from "vue";
const sidenav = ref(false);
</script>

<style>
html {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 18px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}
.header-site {
    background-image: url("@/static/bg.jpeg");
    height: 60vh;
    max-height: 360px;
}
</style>
