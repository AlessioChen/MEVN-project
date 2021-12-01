<template>
    <div class="header-container">
        <header class="the-header">
            <TheSideNavBtn @toggle="$emit('sidenavToggle')" />
            <div class="logo">
                <nuxt-link to="/">HOME PAGE</nuxt-link>
            </div>
            <div class="spacer"></div>
            <div class="navigation-items">
                <NavList display="flex" margin="0 10px" />
            </div>
        </header>
    </div>
</template>

<script setup>
import NavList from "./NavList.vue"
import TheSideNavBtn from "./TheSideNavBtn.vue"
</script>

<style scoped>
.header-container {
    height: 60px;
}
.the-header {
    width: 100%;
    position: fixed;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    background-color: #a2f5cb;
    z-index: 100;
    box-sizing: border-box;
    padding: 0 20px;
}
.logo {
    margin: 0 10px;
    font-size: 1.3rem;
}
.logo a {
    text-decoration: none;
    color: black;
}
.spacer {
    flex: 1;
}
.navigation-items {
    text-align: center;
    display: none;
}
@media (min-width: 768px) {
    .navigation-items {
        display: block;
    }
}
</style>