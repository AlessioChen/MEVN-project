<template>
    <div>
        <Header @sidenavToggle="sidenav = !sidenav"></Header>
        <SideNav :show="sidenav" @close="sidenav = false"></SideNav>
        <div class="w-full m-0 p-0 bg-cover bg-bottom header-site">
            <div class="container max-w-4l mx-auto pt-16 md:pt-32 text-center break-normal"></div>
        </div>

        <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-24">
            <slot />
        </div>
    </div>
</template>


<script>

import Header from "~~/components/navigation/Header.vue";
import SideNav from "~~/components/navigation/SideNav.vue";
import { ref } from "@vue/reactivity"

export default {
    components: {
        Header,
        SideNav
    },
    setup() {
        let sidenav = ref(false);

        return { sidenav }
    }
}
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
