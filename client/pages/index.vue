<template>
    <div>
        <p class="text-white font-extrabold text-3xl md:text-5xl">Home</p>
        <PostList type="last" />
    </div>
</template>

<script>
import PostList from "~~/components/posts/PostList.vue";
export default {
    components: {
        PostList
    }
};
</script>