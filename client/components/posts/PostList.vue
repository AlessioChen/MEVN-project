<template>
    <!-- Post Container -->
    <div class="flex flex-wrap justify-between pt-12 -mx-6">
        <div v-for="(post, index) in posts" :key="`post ${index}`" :class="`w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink`">
            <PostPreview 
            :id="post._id" 
            :title="post.title" 
            :description="post.content" 
            :thumbnail="'https://source.unsplash.com/collection/225/800x600'" 
            :userImg="'http://i.pravatar.cc/300'"
            :timeToRead="post.timeToRead"
            :tail="'1/2'" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { getPosts } from "@/helpers/postHelper"
import PostPreview from "./PostPreview.vue";
// const props = defineProps(['type']);

let posts = ref();
const data = await getPosts(); 
onMounted(() => {

    posts.value = data; 
})




</script>

<style></style>