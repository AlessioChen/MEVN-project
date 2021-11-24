<template>
  <div>
    <div class="flex flex-wrap justify-between pt-12 -mx-6">
      <div v-for="(post, index) in posts" :key="`post ${index}`" :class="`w-full md:w-${post.tail} p-6 flex flex-col flex-grow flex-shrink`">
        <PostPreview :id="post.id" :title="post.title" :description="post.description" :thumbnail="post.thumbnail" :userImg="post.userImg" :timeToread="post.timeToread" :tail="post.tail"></PostPreview>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview.vue";
export default {
  name: "PostList",
  components: { PostPreview },
  props: ["type"],
  data() {
    return {
      posts: [],
      allPosts: [
        {
          tail: "1/3",
          id: "1",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/225/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/3",
          id: "2",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/3106804/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/3",
          id: "3",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/3657445/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/2",
          id: "4",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/764827/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/2",
          id: "5",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/1118905/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/3",
          id: "6",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/325867/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/3",
          id: "6",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/3657445/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/3",
          id: "6",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/764827/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
      ],
      lastPosts: [
        {
          tail: "1/2",
          id: "4",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/764827/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/2",
          id: "5",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/1118905/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/2",
          id: "6",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/325867/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
        {
          tail: "1/2",
          id: "6",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum eu nunc commodo posuere et sit amet ligula.",
          thumbnail: "https://source.unsplash.com/collection/3657445/800x600",
          userImg: "http://i.pravatar.cc/300",
          timeToRead: "1 MIN READ",
        },
      ],
    };
  },
  mounted() {
    if (this.type == "all") {
      this.posts = this.allPosts;
    } else if (this.type == "last") {
      this.posts = this.lastPosts;
    }
  },
};
</script>

<style></style>
