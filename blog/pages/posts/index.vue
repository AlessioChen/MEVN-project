<template>
  <div>
    <h1 class="title">
      LISTA DEI POST CON ANTEPRIME
      <a href="/posts/1">POST 1</a>
      <a href="/posts/2">POST 2</a>
      <a href="/posts/3">POST 3</a>
    </h1>
    <div class="flex flex-wrap justify-between pt-12 mx-6">
      <div v-for="(post,index) in posts" :key="`post ${index}`" :class="`w-full md:w-${post.tail} p-6 flex flex-col flex-grow flex-shrink`">
        <PostPreview :id="post.id" :title="post.title" :description="post.description" :thumbnail="post.thumbnail" :userImg="post.userImg" :timeToread="post.timeToread" :tail="post.tail"></PostPreview>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
  data() {
    return {
      posts: [
        { tail: '1/3', id: '1', title: 'Lorem 1', description: 'Desc 1', thumbnail: 'https://source.unsplash.com/collection/225/800x600', userImg: 'http://i.pravatar.cc/300', tiemToRead: '1 MIN READ' },
        { tail: '1/3', id: '2', title: 'Lorem 2', description: 'Desc 2', thumbnail: 'https://source.unsplash.com/collection/3106804/800x600', userImg: 'http://i.pravatar.cc/100', tiemToRead: '1 MIN READ' },
        { tail: '1/3', id: '3', title: 'Lorem 3', description: 'Desc 3', thumbnail: 'https://source.unsplash.com/collection/3657445/800x600', userImg: 'http://i.pravatar.cc/50', tiemToRead: '1 MIN READ' },
        { tail: '1/2', id: '4', title: 'Lorem 4', description: 'Desc 4', thumbnail: 'https://source.unsplash.com/collection/325867/800x600', userImg: 'http://i.pravatar.cc/1', tiemToRead: '1 MIN READ' },
        { tail: '1/2', id: '5', title: 'Lorem 5', description: 'Desc 5', thumbnail: 'https://source.unsplash.com/collection/764827/800x600', userImg: 'http://i.pravatar.cc/200', tiemToRead: '1 MIN READ' },
      ]
    }
  }
};
</script>

<style></style>
