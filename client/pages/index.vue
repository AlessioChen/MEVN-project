<template>
    <div>
        <p class="text-white font-extrabold text-3xl md:text-5xl">Home</p>
        HOME PAGE
    <button @click="auth.login">Login</button>  
    </div>
</template>

<script setup>
import PostList from "~~/components/posts/PostList.vue";
import { useAuthStore } from "~~/stores/auth";

const auth = useAuthStore()
</script>