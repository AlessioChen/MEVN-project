<template>
    <!-- Post Container -->
    <div class="flex flex-wrap justify-between pt-12 -mx-6">
        <div v-for="(post, index) in posts" :key="`post ${index}`" :class="`w-full md:w-${post.tail} p-6 flex flex-col flex-grow flex-shrink`">
            {{ post.tail }}
            <PostPreview 
                :id="post.id" 
                :title="post.title" 
                :description="post.description"
                :thumbnail="post.thumbnail"
                :userImg="post.userImg" 
                :timeToread="post.timeToread"
                :tail="post.tail"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import PostPreview from "./PostPreview.vue";
const props = defineProps(['type']);
const allPosts = ref([
    { tail: '1/3', id: '1', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/225/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/3', id: '2', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/3106804/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/3', id: '3', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/3657445/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/2', id: '4', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/764827/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/2', id: '5', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/1118905/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/3', id: '6', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/325867/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/3', id: '6', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/3657445/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/3', id: '6', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/764827/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' }
]);
const lastPosts = ref([
    { tail: '1/2', id: '4', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/764827/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/2', id: '5', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/1118905/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/2', id: '6', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/325867/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
    { tail: '1/2', id: '6', title: 'Lorem ipsum dolor sit amet.', description: 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.', thumbnail: 'https://source.unsplash.com/collection/3657445/800x600', userImg: 'http://i.pravatar.cc/300', timeToRead: '1 MIN READ' },
])

let posts = ref();
onMounted(() => {
    if (props.type == "all") {
        posts.value = allPosts.value;
    } else if (props.type == "last") {
        posts.value = lastPosts.value;
    }
})


</script>

<style></style>